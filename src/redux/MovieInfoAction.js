import { FETCH_MOVIE_INFO_REQUEST ,FETCH_MOVIE_INFO_SUCCESS,FETCH_MOVIE_INFO_FAILURE} from "./MovieInfoActionType";

const movieInfoRequest = (movieId) =>{
    return {
        type:FETCH_MOVIE_INFO_REQUEST,
        movieId
    }
}
const movieInfoSuccess = (movies) =>{
 return {
     type:FETCH_MOVIE_INFO_SUCCESS,
     payload:movies
 }
}
const movieInfoFailure = (error) =>{
    return {
        type:FETCH_MOVIE_INFO_FAILURE,
        payload:error
    }
}
export {
    movieInfoFailure,
    movieInfoSuccess,
    movieInfoRequest
}