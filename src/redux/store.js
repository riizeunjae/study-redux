import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const DefaultMiddleware = getDefaultMiddleware();
        return [...DefaultMiddleware]
    }
})

export default store;