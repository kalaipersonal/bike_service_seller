import { createSlice } from "@reduxjs/toolkit";


const Login_slice=createSlice({
    name:"login",
    initialState:{
        loading:false,
        loginuser:[]
    },
    reducers:{
        loginRequest(state,action){
            return{
                loading:true
            }
        },
        loginSuccess(state,action){
            return{
                loading:false,
                loginuser:action.payload
            }
        },
        loginFail(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }
    }
})


const {actions,reducer}=Login_slice;


export const {loginRequest,loginFail,loginSuccess}=actions;

export default reducer;