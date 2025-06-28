import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./store/Theme";
import { UserReducer } from "./store/UserDetails";
import { global_reducer } from "./store/globalReducer";
import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootPersistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["global_reducer"]
}

export const rootReducer = combineReducers({
    themeReducer,
    UserReducer,
    global_reducer
})

const persistedReducer = persistReducer(rootPersistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
});

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;