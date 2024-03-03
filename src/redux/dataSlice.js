import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    keyword : ""
}

export const dataSlice = createSlice({
    name : "data",
    initialState, 
    reducers : {
        createDataFunc : (state,action) => {
            state.data = [...state.data, action.payload]
        },
        deleteDataFunc : (state,action) => {
             state.data = state.data.filter((item) => item.id !== action.payload)
        },
        sortingDataFunc : (state,action) => {
            state.data = state.data.sort((a,b) => action.payload == 'asc' ? a.price - b.price : b.price - a.price || null )
        },
        uptadeDataFunc : (state,action) => {
            state.data = [...state.data.map(item => item.id === action.payload.id ? { ...item, ...action.payload } : item)];
        },
        searchDataFunc : (state,action) => {
            state.keyword = action.payload
        }
    }

})

export const {createDataFunc,deleteDataFunc,sortingDataFunc,uptadeDataFunc,searchDataFunc} = dataSlice.actions

export default dataSlice.reducer