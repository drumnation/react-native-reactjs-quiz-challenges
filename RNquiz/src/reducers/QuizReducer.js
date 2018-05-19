import {
  ADD_TO_RESULTS,
  CREATE_QUIZ_DATA,
  INCREMENT_QUESTION,
  INCREMENT_SCORE,
  SET_CURRENT_QUESTION,
  SET_FORMATTED_QUESTIONS,
  SET_IS_CORRECT,
  SET_LOADING_STATE,
  SET_QUESTION,
  SET_QUESTION_ANSWERED,
  SET_QUIZ_DATA,
  SET_RESULTS,
  SET_SCORE
} from "../types";

const defaultState = {
  current: 0,
  data: null,
  isLoading: null,
  questions: [],
  question: null,
  results: [],
  score: 0,
  answered: false,
  correct: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_TO_RESULTS:
      return {
        ...state,
        results: [...state.results, action.result]
      };
    case CREATE_QUIZ_DATA:
      return {
        ...state
      };
    case INCREMENT_QUESTION:
      return {
        ...state,
        current: state.current + 1
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        score: state.score + 1
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        current: action.currentQuestion
      };
    case SET_FORMATTED_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    case SET_IS_CORRECT:
      return {
        ...state,
        correct: action.correct
      };
    case SET_LOADING_STATE:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case SET_QUESTION:
      return {
        ...state,
        question: action.payload
      };
    case SET_QUESTION_ANSWERED:
      return {
        ...state,
        answered: action.answered
      };
    case SET_QUIZ_DATA:
      return {
        ...state,
        data: action.quizData
      };
    case SET_RESULTS:
      return {
        ...state,
        results: action.results
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.score
      };
    default:
      return state;
  }
}
