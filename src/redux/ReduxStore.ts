import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./UserReducer";
import {thunk} from "redux-thunk";

export const store = configureStore({
    reducer: {
        userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;