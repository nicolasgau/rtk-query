import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { configureStore  } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import {modelApi} from './features/api/modelApi'
import rootReducer, { RootState } from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const  store = configureStore({
    // reducer: persistedReducer, 
    reducer: rootReducer, 
    middleware: ((getDefaultMiddleware)  => 
      getDefaultMiddleware(
        {
          serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }
      ).concat([modelApi.middleware])
     )
})

// export const persistedStore = persistStore(store)

export default store

export type AppDispatch = typeof store.dispatch 
export  const useAppDispatch: () => AppDispatch = useDispatch   
export  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector   
