import { FETCH_MOVIE_INFO_REQUEST,FETCH_MOVIE_INFO_SUCCESS,FETCH_MOVIE_INFO_FAILURE } from "./MovieInfoActionType";

const initialMovieInfoState = {
    movies: {},
    loading: true
}
const movieInfoReducer = (state = initialMovieInfoState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_INFO_REQUEST:
            return {
                ...state,
            }
        case FETCH_MOVIE_INFO_SUCCESS: return {
            ...state,
            loading:false,
            movies:action.payload
        }
        case FETCH_MOVIE_INFO_FAILURE: return {
            loading:false,
            movies:{},
            error:action.payload
        }
        default : return state
    }
}
export default movieInfoReducer;