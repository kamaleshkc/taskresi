import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosInstance from '../utils/axios';
import { Post,initialState } from '../types/posts';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



// Thunks for API calls
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axiosInstance.get<Post[]>('/posts');
  return response.data;
});

export const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost: Omit<Post, 'id'>) => {
    const response = await axiosInstance.post<Post>('/posts', newPost);
    return response.data;
  }
);

// Create the slice
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch posts';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      });
  },
});

export default postsSlice.reducer;