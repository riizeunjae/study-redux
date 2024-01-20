import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const defaultMiddleware = getDefaultMiddleware();
        return [...defaultMiddleware, sagaMiddleware];
    },
});

sagaMiddleware.run(rootSaga);

export default store;