import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FeatureKey } from "../featureKey";

/**
 * Payload
 */
// export type UserPayload = {
//   name: string;
// };

/**
 * State
 */
// export type UserState = {
//   id: string;
//   name: string;
// };

// export type UsersState = {
//   users: UserState[];
// };

const initialState: any = {
  list: [],
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
});

const postsSlice = createSlice({
  name: FeatureKey.USER,
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending.toString()]: (state: any, action: any) => {
      state.status = "loading";
    },
    [getPosts.fulfilled.toString()]: (state: any, { payload }: any) => {
      state.list = payload;
      state.status = "success";
    },
    [getPosts.rejected.toString()]: (state: any, action: any) => {
      state.status = "rejected";
    },
  },
});

export const selectAllPosts = (state: any) => state.posts;

/**
 * Reducer
 */
export default postsSlice.reducer;
