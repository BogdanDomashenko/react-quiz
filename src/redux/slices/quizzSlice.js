import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuizz = createAsyncThunk(
  "quizz/fetchQuizz",
  async function (code) {
    try {
      console.log(code);
      const response = await axios.get("http://localhost:3001/quizzes/" + code);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const quizzSlice = createSlice({
  name: "quizz",
  initialState: {
    quizz: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchQuizz.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchQuizz.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.quizz = action.payload;
    },
    [fetchQuizz.rejected]: (state, action) => {},
  },
});

export default quizzSlice.reducer;
