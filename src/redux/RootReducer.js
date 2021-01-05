import {combineReducers} from 'redux';
import popularMovieReducer from './PopularMovieReducer';
import movieInfoReducer from './MovieInfoReducer';
import castingInfoReducer from './CastingReducer';
import {personReducer,extLinkReducer, personMovieCreditReducer} from './PersonReducer';
const rootReducer = combineReducers({
  popularMovies: popularMovieReducer,
  movies:movieInfoReducer,
  casting:castingInfoReducer,
  personInfo:personReducer,
  externalLinks:extLinkReducer,
  personMovieCredits:personMovieCreditReducer
})

export default rootReducer;