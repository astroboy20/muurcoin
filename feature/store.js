import {configureStore} from "@reduxjs/toolkit"
import  authReducer from "../feature/slice/authSlice"
export const store = configureStore({
    reducer:{
        auth:authReducer
    }
})