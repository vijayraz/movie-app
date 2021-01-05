import  { FETCH_POPULAR_MOVIE_SUCCESS, FETCH_POPULAR_MOVIE_FAILURE, FETCH_POPULAR_MOVIE_REQUEST }  from './PopularMovieActionType'

const fetchPopularMovie = () => {
    return {
        type: FETCH_POPULAR_MOVIE_REQUEST
    }
}

const fetchPopularMovieSuccess = (popularMovies) => {
    return {
        type: FETCH_POPULAR_MOVIE_SUCCESS,
        payload: popularMovies
    }
}

const fetchPopularMovieFailure = (error) => {
    return {
        type: FETCH_POPULAR_MOVIE_FAILURE,
        payload: error
    }
}

export {
    fetchPopularMovie,
    fetchPopularMovieSuccess,
    fetchPopularMovieFailure
}