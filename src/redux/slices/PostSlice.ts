import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Post = {
    id: number;
    title: string;
    body: string;
    author: string,
    date: string,
}

type  initialState= {
    posts: Post[],
    status: String,
    error: string | Array<String> | null

}
export const getTopPosts = createAsyncThunk("credentials", async () => {
    const response = await fetch("link");
    const data = await response.json();
    return data;
})

export const getTrendingPost = createAsyncThunk("credentials", async () => {
    const response = await fetch("link");
    const data = await response.json();
    return data;
})
const topPosts = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: "idle",
        error: null,
    } as initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getTopPosts.pending, (state) => {
                state.status = 'loading';
            })
            // Fetch Posts (Fulfilled state)
            .addCase(getTopPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            // Fetch Posts (Rejected state)
            .addCase(getTopPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'An error occurred';
            })
            .addCase(getTrendingPost.pending, (state) => {
                state.status = 'loading';
            })
            // Fetch Posts (Fulfilled state)
            .addCase(getTrendingPost.fulfilled, (state, action: PayloadAction<Post[]>) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            // Fetch Posts (Rejected state)
            .addCase(getTrendingPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'An error occurred';
            })
    },
})
export default topPosts.reducer;