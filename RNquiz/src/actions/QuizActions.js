import * as actions from "./index";

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

import { Actions } from "react-native-router-flux";

const Entities = require("html-entities").AllHtmlEntities;

const entities = new Entities();

export const loading = isLoading => ({
  type: SET_LOADING_STATE,
  isLoading
});

export const setCurrentQuestion = currentQuestion => ({
  type: SET_CURRENT_QUESTION,
  currentQuestion
});

export const setScore = score => ({
  type: SET_SCORE,
  score
});

export const incrementScore = () => ({
  type: INCREMENT_SCORE
});

export const incrementQuestion = () => ({
  type: INCREMENT_QUESTION
});

export const addToResults = result => ({
  type: ADD_TO_RESULTS,
  result
});

export const setQuizData = quizData => ({
  type: SET_QUIZ_DATA,
  quizData
});

export const setResults = results => ({
  type: SET_RESULTS,
  results
});

export const setQuestionAnswered = answered => ({
  type: SET_QUESTION_ANSWERED,
  answered
});

export const setIsCorrect = correct => ({
  type: SET_IS_CORRECT,
  correct
});

export const setNextQuestionData = () => {
  return async (dispatch, getState) => {
    const { quiz } = await getState();
    await dispatch({
      type: SET_QUESTION,
      payload: quiz.questions[quiz.current - 1]
    });
  };
};

export const createQuizData = (numberOfQuestions, difficulty, type) => {
  return async dispatch => {
    dispatch({ type: CREATE_QUIZ_DATA });
    const response = await fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=${type}`
    );
    const data = await response.json();
    dispatch(actions.setQuizData(data.results));
    const questions = data.results.map((question, index) => {
      const correct = entities.decode(question.correct_answer.trim());
      const text = entities.decode(question.question.trim());
      let choices = question.correct_answer
        .split(",")
        .concat(question.incorrect_answers);
      choices = choices.map(choice => entities.decode(choice.trim()));
      return {
        id: index,
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        text: text,
        choices: choices,
        correct: correct,
        incorrect: question.incorrect_answers
      };
    });
    dispatch({ type: SET_FORMATTED_QUESTIONS, payload: questions });
  };
};

export const handleTrueFalse = bool => {
  return async (dispatch, getState) => {
    const { quiz } = await getState();
    if (quiz.question.correct.indexOf(bool) !== -1) {
      dispatch(actions.incrementScore());
      dispatch(actions.addToResults(true));
      dispatch(actions.setIsCorrect(true));
    } else {
      dispatch(actions.addToResults(false));
      dispatch(actions.setIsCorrect(false));
    }
    dispatch(actions.setQuestionAnswered(true));
  };
};

export const nextQuestion = () => {
  return async (dispatch, getState) => {
    const { quiz } = await getState();
    if (quiz.current === 0) {
      dispatch(actions.incrementQuestion());
      dispatch(actions.setNextQuestionData());
      Actions.question({ type: "reset" });
    } else if (quiz.current < quiz.questions.length) {
      dispatch(actions.incrementQuestion());
      dispatch(actions.setNextQuestionData());
    } else {
      Actions.results({ type: "reset" });
    }
    dispatch(actions.setQuestionAnswered(false));
  };
};

export const playAgain = () => {
  return async dispatch => {
    await dispatch(actions.loading(true));
    await dispatch(actions.setScore(0));
    await dispatch(actions.setCurrentQuestion(0));
    await Actions.intro({ type: "reset" });
    await dispatch(actions.createQuizData(10, "hard", "boolean"));
    await dispatch(actions.setResults([]));
    await dispatch(actions.loading(false));
  };
};
