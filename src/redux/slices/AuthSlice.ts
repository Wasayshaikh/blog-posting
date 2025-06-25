import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { login, logout, register, type AuthPayload, type user } from "../thunkFunctions/Auth";




type initialState = {
    user: user | null,
    token: string | null,
    status: string | null | [],
    error: string | Array<String | Object> | null | object,
    message: string | null,
    isLogged:boolean
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        status: null,
        error: null,
        isLogged: false
    } as initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<AuthPayload>) => {
                state.status = 'Success';
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogged= true
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                if (action.payload) {

                    state.error = action.payload.message || 'Something went wrong';
                } else {

                    state.error = action.error.message || 'Unknown error';
                }
            })
            .addCase(register.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(register.fulfilled, (state, action: PayloadAction<AuthPayload>) => {
                state.status = 'Success';
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogged= true
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed';
                if (action.payload) {

                    state.error = action.payload.message || 'Something went wrong';
                } else {

                    state.error = action.error.message || 'Unknown error';
                }
            })
            .addCase(logout.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'Success';
                state.user = null;
                state.token = null;
                state.isLogged= false
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                if (action.payload) {

                    state.error = action.payload.message || 'Something went wrong';
                } else {

                    state.error = action.error.message || 'Unknown error';
                }
            })
    }
});

export default authSlice.reducer