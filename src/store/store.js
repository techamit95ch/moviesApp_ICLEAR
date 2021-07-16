import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import {reducers} from "../reducers";
// import rootSaga from "../sagas";
import mySaga from "../sagas";

// console.log(rootSaga);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
export default createStore(reducers, applyMiddleware(sagaMiddleware));

// then run the saga
// sagaMiddleware.run(rootSaga);
sagaMiddleware.run(mySaga);