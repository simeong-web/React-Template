import { combineReducers } from "@reduxjs/toolkit";
import { postsThunk } from "../thunks";

export const rootReducers = combineReducers({
  posts: postsThunk.slice.reducer,
});
