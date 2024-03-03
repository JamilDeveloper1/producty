import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modal : false, 
}




export const modalSlice = createSlice({
    name : "modal", 
    initialState, 
    reducers : {
        handleClick : (state) => {
            state.modal = !state.modal
        }
    }
})

export const {handleClick,changeBtnTextFunc} = modalSlice.actions

export default modalSlice.reducer