import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../rootReducer"

export type Counter = {value: number}

const initialState = { value: 0}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCount: (state, actions: PayloadAction<number>) => { 
            state.value +=  1
        }
    }


})

export default counterSlice.reducer
export const {addCount} = counterSlice.actions
export const countValue = (state:RootState) => state.counter.value
