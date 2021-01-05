import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { movieInfoRequest } from '../../redux/MovieInfoAction'
import { fetchCastingInfoRequest } from '../../redux/CastingAction'
import MovieOverview from '../MovieOverview/MovieOverview';
import MovieCast from '../MovieCast/MovieCast';

const useStyles = makeStyles((theme) => ({ /****  do wt ever u want  here */ }))

const FullMovieInfo = ({ match, movieInfoRequest, castingInfoRequest, movieObj, castingObj }) => {

    const classes = useStyles();
    useEffect(() => {
        movieInfoRequest(match.params.movieId);
        castingInfoRequest(match.params.movieId);
    }, []);


    const movieOverView = movieObj.loading ? (<h1>loading</h1>) : movieObj.error ? (<h1>{movieObj.error}</h1>) : (<MovieOverview movieObj={movieObj.movies} />)

    const casting = castingObj.loading ? (<h1>loading</h1>) : castingObj.error ? (<h1>{castingObj.error}</h1>) : (<MovieCast movieObj={castingObj} />)
    return (
        <>
            {movieOverView}
            {casting}
        </>
    )
}

const mapStateToProps = state => {
    return {
        movieObj: state.movies,
        castingObj: state.casting
    }

}

const mapDispatchToProps = (dispatch) => {

    return {
        movieInfoRequest: (movieId) => dispatch(movieInfoRequest(movieId)),
        castingInfoRequest: (movieId) => dispatch(fetchCastingInfoRequest(movieId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FullMovieInfo)

