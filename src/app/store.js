import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicsSlice'
import quizReducer from '../features/quizzes/quizzesSlice'
export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer
  },
});
