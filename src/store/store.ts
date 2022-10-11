import rootReducer, { RootState } from "./rootReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const  store = configureStore({
    reducer: persistedReducer,
    middleware: ((getDefaultMiddleware)  => 
      getDefaultMiddleware({
        serializableCheck: false
      })
     )
})

export const persistedStore = persistStore(store)

export default store

export type AppDispatch = typeof store.dispatch 
export  const useAppDispatch: () => AppDispatch = useDispatch   
export  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector   