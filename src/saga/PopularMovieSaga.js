
import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_POPULAR_MOVIE_FAILURE, FETCH_POPULAR_MOVIE_REQUEST, FETCH_POPULAR_MOVIE_SUCCESS } from '../redux/PopularMovieActionType';
//this is a watcher saga
function getPopularMovies() {
    const popularMovieURL = `${process.env.REACT_APP_MOVIEDB_BASEURL}movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=1`;
    return axios.get(popularMovieURL)
        .then(response => response.data)
        .catch(error => { throw error });
}
function* fetchPopularMovie() {
    try {
        console.log(1)
        const popularMovies = yield call(getPopularMovies);
        console.log(popularMovies)
        yield put({ type: FETCH_POPULAR_MOVIE_SUCCESS, payload: popularMovies });
    } catch (e) {
        yield put({ type: FETCH_POPULAR_MOVIE_FAILURE, payload: e.message });
    }
}
function* popularMovieSaga() {
    console.log('called')
    yield takeEvery(FETCH_POPULAR_MOVIE_REQUEST, fetchPopularMovie);
}

export default popularMovieSaga;