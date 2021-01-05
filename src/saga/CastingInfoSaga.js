import { call, put, takeLatest } from "redux-saga/effects"
import axios from 'axios'
import { FETCH_CAST_INFO_REQUEST,FETCH_CAST_INFO_FAILURE,FETCH_CAST_INFO_SUCCESS } from "../redux/CastingActionType"

function getCastingById(movieId) {
    const movieCastURL = `${process.env.REACT_APP_MOVIEDB_BASEURL}movie/${movieId}/credits?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
    return axios.get(movieCastURL)
        .then((res) =>res.data)
        .catch((error) => {
            throw error
        })


}
function* fetchCastingInfo(action) {
    // worker saga
    console.log('worker')
    try {
        const casting = yield call(() => getCastingById(action.movieId))
        console.log(casting)
        yield put({type:FETCH_CAST_INFO_SUCCESS, payload:casting});
    }
    catch(e) {
        console.log(e)
        yield put({type:FETCH_CAST_INFO_FAILURE, payload:e.message})
    }

}
function* castingInfoSaga() {
    console.log('called cast saga')
    //watcher saga
    yield takeLatest(FETCH_CAST_INFO_REQUEST, fetchCastingInfo)
}

export default castingInfoSaga;