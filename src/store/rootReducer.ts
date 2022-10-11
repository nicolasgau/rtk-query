import { combineReducers } from "redux"
import counterReducer from './features/counter/counterSlice'
import dataReducer from './features/data/dataSlice'

const rootReducer = combineReducers({
    counter: counterReducer,
    data: dataReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer 
