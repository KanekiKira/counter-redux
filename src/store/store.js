import { configureStore } from "@reduxjs/toolkit";
import clickReducer from './clickSlice'


export default configureStore({
    reducer: {
        clicks:clickReducer
    }
})