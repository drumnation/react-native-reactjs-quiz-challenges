import QuizReducer from "./QuizReducer"
import { combineReducers } from "redux";

export const makeRootReducer = () => combineReducers({
  quiz: QuizReducer
});

export default makeRootReducer