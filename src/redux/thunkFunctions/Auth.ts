import { createAsyncThunk } from "@reduxjs/toolkit";

export type user = {
    email: string,
    name: string,
    username: string
}

export type AuthError = {
    message: string;
    status?: string;
    error?: string;
};


export type AuthPayload = {
    user: user;
    token: string | null;
};

type LogoutPayload = {status:string,message:string}

// Credentials Types
type LoginCredentials= { email: string; password: string;}
type RegisterCredentials ={ email: string; password: string; username: string; name:string }
type LogoutCredentials={token:string|null}

export const login = createAsyncThunk<AuthPayload, LoginCredentials,{ rejectValue: AuthError }>("auth/login", async (credentials: { email: string, password: string }, thunkAPI) => {
    try {
        const response = await fetch("https://laravel-api.wasayshaikh.com/api/login", {
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

export const register = createAsyncThunk<AuthPayload, RegisterCredentials,{ rejectValue: AuthError }>("auth/register", async (credentials: { email: string, password: string, username: string, name:string }, thunkAPI) => {
        try {
            const response = await fetch("https://laravel-api.wasayshaikh.com/api/register", {
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
export const logout = createAsyncThunk<LogoutPayload, LogoutCredentials,{ rejectValue: AuthError }>("auth/logout", async (credentials: { token: string |null }, thunkAPI) => {
    try {
        const response = await fetch("https://laravel-api.wasayshaikh.com/api/logout", {
            method: "POST",
            headers: { "Content-Type": "application/json",
            "Authorization": `Bearer ${credentials.token}`
            },
            body: JSON.stringify(credentials)
        });
        if (!response.ok) {
            const errorData = await response.json();
            return thunkAPI.rejectWithValue(errorData);
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error: any) {
        return thunkAPI.rejectWithValue({ message: error.message });
    }

})
