import {
  ADD_TO_RESULTS,
  INCREMENT_QUESTION,
  INCREMENT_SCORE,
  SET_CURRENT_QUESTION,
  SET_FORMATTED_QUESTIONS,
  SET_LOADING_STATE,
  SET_QUIZ_DATA,
  SET_RESULTS,
  SET_SCORE
} from "../types";

const defaultState = {
  current: 0,
  data: null,
  isLoading: null,
  questions: [],
  results: [],
  score: 0
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case ADD_TO_RESULTS:
      return {
        ...state,
        results: [...state.results, action.result]
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.score
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.results
      };
    case SET_QUIZ_DATA:
      return {
        ...state,
        data: action.quizData
      };
    case SET_FORMATTED_QUESTIONS:
      return {
        ...state,
        questions: action.questions
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        score: (state.score + 1)
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        current: action.currentQuestion
      };
    case INCREMENT_QUESTION:
      return {
        ...state,
        current: (state.current + 1)
      };
    default:
      return state;
  }
}
