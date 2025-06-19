import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"



type user = {
    email: string,
    name: string,
    username: string
}

type AuthPayload = {
  user: user;
  token: string | null;
};
type initialState = {
    user: user | null,
    token: string | null,
    status: string | null | [],
    error: string | Array<String> | null
}
export const login = createAsyncThunk("auth/login", async (credentials: { email: string, password: string }, thunkAPI) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            const errorData = await response.json();
            return thunkAPI.rejectWithValue(errorData);
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }

})

export const register = createAsyncThunk("auth/register", async (credentials: { email: string, password: string, username: string }, thunkAPI) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            const errorData = await response.json();
            return thunkAPI.rejectWithValue(errorData);
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }

})
export const logout = createAsyncThunk("auth/logout", async (credentials: { token: string }, thunkAPI) => {
    try {
        const response = await fetch("link", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            const errorData = await response.json();
            return thunkAPI.rejectWithValue(errorData);
        }
        const data = await response.json();
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }

})

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
                state.error = action.error.message || 'An error occurred';
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
                state.error = action.error.message || 'An error occurred';
            })
            .addCase(logout.pending, (state) => {
                state.status = 'loading';
                state.user = null;
                state.token = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.status = 'Success';
                state.user = null;
                state.token = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'An error occurred';
                state.user = null;
                state.token = null
            })
    }
});

export default authSlice.reducer