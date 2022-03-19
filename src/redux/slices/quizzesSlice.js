import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuizzes = createAsyncThunk(
  "quizzes/fetchQuizzes",
  async function () {
    try {
      const response = await axios.get("http://localhost:3001/quizzes/list");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchQuizzes.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchQuizzes.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.quizzes = action.payload;
    },
    [fetchQuizzes.rejected]: (state, action) => {},
  },
});

//export const {} = quizzesSlice.actions;

export default quizzesSlice.reducer;
