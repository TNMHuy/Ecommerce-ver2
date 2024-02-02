import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../apis/axios";
import { loginUser } from "../../apis/auth";


const initialState = {
    user: null,
    token: null,
    isLogin: false,
    isLoading: false,
    isError: false,
};

export const login = createAsyncThunk('auth/login', async (data) => {
    const response = await loginUser(data)
    return response;
});

const authSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        refreshToken: (state, action) => {
            // console.log(action);
            state.token = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.isLogin = false;
            state.token = null;
        }
    },
    extraReducers: (builder) => {
        //login
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = action.payload.accessToken;
            state.isLogin = true;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.isLogin = false;
            state.isError = true;
        });
    }
});

export const { logout, refreshToken } = authSlice.actions;
export default authSlice.reducer;