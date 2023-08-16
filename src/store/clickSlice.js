import { createSlice } from "@reduxjs/toolkit";


const clicksSlcie = createSlice({
    name:'clics',
    initialState:{
        clicks:0
    },
    reducers:{
        addClick: (state,action) => {
            state.clicks += 1;
        },
        nullClick: (state,action) => {
            state.clicks = 0;
        }
    }
})

export const {addClick,nullClick} = clicksSlcie.actions;

export default clicksSlcie.reducer;