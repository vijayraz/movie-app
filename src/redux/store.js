import { createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './RootReducer';

import rootSaga from '../saga/index'

//create a saga
const sagaMiddleMare = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleMare)));
//run your saga
sagaMiddleMare.run(rootSaga);

export default store;