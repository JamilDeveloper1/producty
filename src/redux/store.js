import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import dataReducer from "./dataSlice";

export const store = configureStore({
    reducer : {
        modal : modalReducer,
        data  : dataReducer
    }
})
