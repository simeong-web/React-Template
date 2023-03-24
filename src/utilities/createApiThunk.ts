import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const createApiThunk = (sliceName: string, type: string, api: () => Promise<any>, initialState: any) => {
  const fetch = createAsyncThunk(type, api);
  const slice = createSlice({
    name: sliceName,
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetch.fulfilled, (state, action) => {
        return action.payload
      });
    }
  });
  return { slice, fetch }
}

export default createApiThunk;