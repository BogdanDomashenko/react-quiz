import { combineReducers } from "redux";

import quizzesSlice from "./quizzesSlice";
import quizzSlice from "./quizzSlice";

export default combineReducers({
  quizzes: quizzesSlice,
  quizz: quizzSlice,
});
