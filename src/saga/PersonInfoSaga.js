import { call, put, takeEvery } from "redux-saga/effects";
import {
    FETCH_PERSON_INFO_FAILURE, FETCH_PERSON_INFO_REQUEST, FETCH_PERSON_INFO_SUCCESS,
    FETCH_PERSON_EXT_FAILURE, FETCH_PERSON_EXT_REQUEST, FETCH_PERSON_EXT_SUCCESS, FETCH_PERSON_MOVIE_CREDIT_SUCCESS, FETCH_PERSON_MOVIE_CREDIT_FAILURE
} from "../redux/PersonActionType";
import axios from 'axios'
const getPersonInfoById = (personId) => {
    const personURL = `${process.env.REACT_APP_MOVIEDB_BASEURL}person/${personId}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
    return axios.get(personURL)
        .then(response => response.data)
        .catch(error => { throw error })
}
const getPersonExtLinkById = (personId) => {
    const personExtURL = `${process.env.REACT_APP_MOVIEDB_BASEURL}person/${personId}/external_ids?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
    return axios.get(personExtURL)
        .then(response => response.data)
        .catch(error => { throw error })
}
const getMovieCreditById = (personId)=>{    
    const movieCreditURL = `${process.env.REACT_APP_MOVIEDB_BASEURL}person/${personId}/movie_credits?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
    return axios.get(movieCreditURL)
        .then(response => response.data)
        .catch(error => { throw error })
}
function* fetchPersonInfo(action) {
    try {
        const persons = yield call(() => getPersonInfoById(action.personId));
        yield put({ type: FETCH_PERSON_INFO_SUCCESS, payload: persons })
    }
    catch (e) {
        yield put({ type: FETCH_PERSON_INFO_FAILURE, payload: e.message })
    }
    console.log(action.personId)
}
function* fetchPersonExternalAllId(action) {
    try {
        const externalLinks = yield call(() => getPersonExtLinkById(action.personId));
        console.log(externalLinks)
        yield put({ type: FETCH_PERSON_EXT_SUCCESS, payload: externalLinks })
    }
    catch (e) {
        yield put({ type: FETCH_PERSON_EXT_FAILURE, payload: e.message })
    }
}
function* fetchPersonMovieCredits(action) {
    try {
        const externalLinks = yield call(() => getMovieCreditById(action.personId));
        yield put({ type: FETCH_PERSON_MOVIE_CREDIT_SUCCESS, payload: externalLinks })
    }
    catch (e) {
        yield put({ type: FETCH_PERSON_MOVIE_CREDIT_FAILURE, payload: e.message })
    }
}


function* personInfoByIdSaga() {
    yield takeEvery(FETCH_PERSON_INFO_REQUEST, fetchPersonInfo);
}
function* personExtLinkByIdSaga() {
    yield takeEvery(FETCH_PERSON_EXT_REQUEST, fetchPersonExternalAllId);
}
function* personMovieCreditSaga() {
    yield takeEvery(FETCH_PERSON_EXT_REQUEST, fetchPersonMovieCredits);
}
export { personExtLinkByIdSaga, personInfoByIdSaga, personMovieCreditSaga }
