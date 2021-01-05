import { FETCH_MOVIE_INFO_FAILURE, FETCH_MOVIE_INFO_REQUEST, FETCH_MOVIE_INFO_SUCCESS } from "../redux/MovieInfoActionType";
import { call, put, takeEvery, fork } from 'redux-saga/effects'
import axios from 'axios'
function getMovieById(movieId) {
    const popularMovieURL = `${process.env.REACT_APP_MOVIEDB_BASEURL}movie/${movieId}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
   
    return axios.get(popularMovieURL)
        .then(response => response.data)
        .catch(error => { throw error });
}
function* fetchMovieInfo(action) {
    try {
        const movie = yield call(()=>getMovieById(action.movieId));
        console.log(movie)
        yield put({ type: FETCH_MOVIE_INFO_SUCCESS, payload: movie });
    } catch (e) {
        yield put({ type: FETCH_MOVIE_INFO_FAILURE, payload: e.message });
    }

}
function* movieInfoSaga() {
    console.log('called 1')
    yield takeEvery(FETCH_MOVIE_INFO_REQUEST, fetchMovieInfo)
}
export default movieInfoSaga;