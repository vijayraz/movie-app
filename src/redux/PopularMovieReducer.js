import { FETCH_POPULAR_MOVIE_FAILURE, FETCH_POPULAR_MOVIE_REQUEST, FETCH_POPULAR_MOVIE_SUCCESS }  from './PopularMovieActionType'

const initialPopularMovieState = {
    popularMovies: [],
    error: '',
    loading:true
}
const popularMovieReducer = (state = initialPopularMovieState, action) => {
    switch (action.type) {
        case FETCH_POPULAR_MOVIE_REQUEST: return {
            ...state
        }
        case FETCH_POPULAR_MOVIE_SUCCESS: return {
            ...state,
            loading:false,
            popularMovies: action.payload
        }
        case FETCH_POPULAR_MOVIE_FAILURE: return {
            ...state,
            loading:false,
            popularMovies:[],
            error:action.payload
        }
        default: return state
    }
}
export default popularMovieReducer;