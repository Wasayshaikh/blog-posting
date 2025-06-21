import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import { login, logout, register, type AuthPayload, type user } from "../thunkFunctions/Auth";




type initialState = {
    user: user | null,
    token: string | null,
    status: string | null | [],
    error: string | Array<String | Object> | null | object,
    message: string | null
}

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        status: null,
        error: null
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
                state.token = action.payload.token
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
                state.token = action.payload.token
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
                state.token = null
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