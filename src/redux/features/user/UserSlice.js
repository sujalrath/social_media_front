import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./UserServices";

export const UserSlice=createSlice({
    name:"user",
    initialState:{
        userToken:"",
        isAuthenticated: false,
        userData: {},
    },
    reducers:{
        getUserData:(state,action)=>{
            state.action=action.payload
        },
        userLogout:(state)=>{
            state.userToken="";
            state.isAuthenticated="";
            state.userData={}
        },
        updateProfile:(state,action)=>{
            state.userData=action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userLogin.fulfilled, (state, action) => {
          state.isAuthenticated = true;
          state.userData = action?.payload?.data.user;
          state.userToken = action?.payload?.data?.token;
           
        });
    }
})

export const {getUserData,userLogout,updateProfile}=UserSlice.actions

export default UserSlice.reducer