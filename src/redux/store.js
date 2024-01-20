import rootReducer from "./reducer";
const { configureStore } = require("@reduxjs/toolkit");
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const DefaultMiddleware = getDefaultMiddleware();
        return [...DefaultMiddleware]
    }
})

export default store;