import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name:'user',
    initialState:{
    user:null,
    loading:true
    },
    reducers:{
    login:(state,{payload})=>{
        state.user = payload
        state.loading = false
    },
    logout:(state,{payload}) => {
        state.user = null;
    }
    }
    
})


export const userAction = userSlice.actions;
export default userSlice.reducer;