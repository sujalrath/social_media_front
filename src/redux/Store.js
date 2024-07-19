import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import UserReducer from "./features/user/UserSlice";
import { persistReducer, persistStore } from "redux-persist";


const persistConfig={
    key:"root",
    storage
}

const rootReducer=combineReducers({
    user:UserReducer,
})

const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store=configureStore({
    reducer:persistedReducer,
})

export const persistor=persistStore(store)
