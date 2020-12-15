import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";

export const FETCH_STATUS = {
  PENDING: "PENDING",
  FULFILLED: "FULFILLED",
  REJECTED: "REJECTED",
};

const initialState = {
  currentPost: undefined,
  currentPostFetchStatus: FETCH_STATUS.FULFILLED,
  posts: [],
  postsFetchStatus: FETCH_STATUS.FULFILLED,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", api.getPosts);

export const fetchPostById = createAsyncThunk(
  "posts/fetchById",
  async (postId) => api.getPostById(postId)
);

export const { reducer, actions } = createSlice({
  name: "root",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.postsFetchStatus = FETCH_STATUS.PENDING;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.postsFetchStatus = FETCH_STATUS.FULFILLED;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.postsFetchStatus = FETCH_STATUS.REJECTED;
    });
    builder.addCase(fetchPostById.pending, (state) => {
      state.currentPostFetchStatus = FETCH_STATUS.PENDING;
    });
    builder.addCase(fetchPostById.fulfilled, (state, action) => {
      state.currentPost = action.payload;
      state.currentPostFetchStatus = FETCH_STATUS.FULFILLED;
    });
    builder.addCase(fetchPostById.rejected, (state) => {
      state.currentPostFetchStatus = FETCH_STATUS.REJECTED;
    });
  },
});
