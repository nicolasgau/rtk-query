import { combineReducers } from "redux"
import counterReducer from './features/counter/counterSlice'
import dataReducer from './features/data/dataSlice'
import {modelApi} from '../features/api/modelApi'

const rootReducer = combineReducers({
    [modelApi.reducerPath]: modelApi.reducer,
    counter: counterReducer,
    data: dataReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer 
