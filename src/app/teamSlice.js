import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "https://team-manager-b2b52-default-rtdb.firebaseio.com";

export const sendData = createAsyncThunk(
  "teams/sendData",

  async (data) => {
    await axios.post(`${baseUrl}/teams.json`, data);
  }
);

export const fetchData = createAsyncThunk("teams/fetchData", async () => {
  const { data } = await axios.get(`${baseUrl}/teams.json`);
  return data;
});

export const deleteData = createAsyncThunk("teams/deleteData", async (id) => {
  await axios.delete(`${baseUrl}/teams/${id}.json`);
});

const teamSlice = createSlice({
  name: "teamReducer",
  initialState: {
    loading: "pending",
    data: null,
    dataChange: 1,
  },
  reducers: {
    changeDataEvent: (state) => {
      state.dataChange = state.dataChange + 1;
    },
  },
  extraReducers: {
    [fetchData.pending](state) {
      state.loading = "pending";
    },
    [fetchData.fulfilled](state, { payload }) {
      state.loading = "fulfilled";
      state.data = payload;
    },
    [fetchData.rejected](state) {
      state.loading = "rejected";
    },
  },
});

export default teamSlice.reducer;
export const teamAction = teamSlice.actions;
