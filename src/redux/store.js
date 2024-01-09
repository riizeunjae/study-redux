import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import asyncFunctionMiddleware from "./middlewares/asyncFunctionMiddleware";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// 꼭 호출해주기!
sagaMiddleware.run(rootSaga);

export default store;
