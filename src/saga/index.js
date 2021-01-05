import { all,fork } from 'redux-saga/effects'
import popularMovieSaga from './PopularMovieSaga'
import movieInfoSaga from  './MovieInfoSaga'
import castingInfoSaga from './CastingInfoSaga'
import {personInfoByIdSaga,personExtLinkByIdSaga, personMovieCreditSaga} from './PersonInfoSaga'

export default function* rootSaga() {
  yield all([
   popularMovieSaga(),
    movieInfoSaga(),
    castingInfoSaga(),
    personInfoByIdSaga(),
    personExtLinkByIdSaga(),
    personMovieCreditSaga()
  ])
}