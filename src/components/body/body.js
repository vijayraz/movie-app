import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SampleCard from '../cards/SampleCard'
import Search from '../search/Search';
import { connect } from 'react-redux';
import { fetchPopularMovie } from '../../redux/PopularMovieAction'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    hero: {
        // backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "4rem",
    },
    control: {
        padding: theme.spacing(2),
    },
    media: {
        height: 140,
    },
    bannerTitle: {
        paddingTop: "6rem",
        paddingBottom: "1rem"

    },
    populatTitle: {
        margin: '50px'
    }
}));




function Body({ movieData, fetchPopularMovie }) {

    const classes = useStyles();
    const [colors, setColors] = useState("0, 0, 0, 0.5")
    useEffect(() => {
        console.log("test")
        fetchPopularMovie();
        console.log("test1")
        const colorList = ["226,69,69,0.5", "93,226,69,0.5", "187,69,226,0.5", "187,226,69,0.5", "141,142,131,0.5", "142,85,64,0.5"]
        setColors(colorList[Math.floor(Math.random() * colorList.length)])
    }, [])
    const popularMovieList =  movieData.loading ? (<h2>loading</h2>) :  movieData.error
        ? (<h1>{movieData.error}</h1>) :movieData.popularMovies.results.map(data => {
            return < Grid item xs={12} sm={6} md={3} key = {data.id}>
                <SampleCard movieObj={data} />
            </Grid>

        })
    return (
        <>
            <Grid container variant="column">
                <Grid item xs={12}>
                    <Box className={classes.hero} style={{ backgroundImage: `linear-gradient(rgba(${colors}), rgba(${colors})), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')` }}>
                        <Grid item xs={12}>
                            <Box width={1}>
                                <Typography variant="h4" className={classes.bannerTitle}>
                                    Welcome.Millions of movies, TV shows and people to discover. Explore now.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Search></Search>
                        </Grid>
                    </Box>
                </Grid>

            </Grid>

            <Container>
                <Typography variant="h4" align="left" className={classes.popularTitle} >
                    What's Popular
                </Typography>
                <Grid container spacing={4}>
                    {popularMovieList}
                </Grid>
            </Container>
        </>
    )
}
const mapStateToProps = state => {
    return {
        movieData: state.popularMovies
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPopularMovie: () => dispatch(fetchPopularMovie())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Body)