import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type Data = {
    id: number 
    title: string
    body: string
    userId: number
}

export type DataSliceState = {
    data: Data[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

export const fetchData = createAsyncThunk(
    'data/fetch',
    async () => {
            const res= await fetch('https://jsonplaceholder.typicode.com/posts/1')
            console.log('fetch data')
             return await res.json()  as Data[]
        }
)

const initialState: DataSliceState = { loading:'idle', data:[]} 

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {state.loading = 'pending'})
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.data = action.payload
        })
        builder.addCase(fetchData.rejected, (state, action) => {state.loading = 'failed', state.data=[]})
    } 

})

export default dataSlice.reducer