// import fetch from "isomorphic-fetch";

import * as actions from "./index";

import {
  ADD_TO_RESULTS,
  CREATE_QUIZ_DATA,
  INCREMENT_QUESTION,
  INCREMENT_SCORE,
  SET_CURRENT_QUESTION,
  SET_FORMATTED_QUESTIONS,
  SET_LOADING_STATE,
  SET_QUIZ_DATA,
  SET_RESULTS,
  SET_SCORE
} from "../types";

const Entities = require("html-entities").XmlEntities;
 
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

export const setFormattedQuestions = questions => ({
  type: SET_FORMATTED_QUESTIONS,
  questions
});

export const createQuizData = (numberOfQuestions, difficulty, type) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_QUIZ_DATA });
    const response = await fetch(`https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=${type}`);
    const data = await response.json();
    dispatch(actions.setQuizData(data.results));
    const formattedQuestions = data.results.map(
      (question, index) => {
        const correct = entities.decode(question.correct_answer.trim());
        const text = entities.decode(question.question.trim());
        let choices = question.correct_answer.split(",").concat(question.incorrect_answers);
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
      }
    );
    dispatch(actions.setFormattedQuestions(formattedQuestions));
  };
};
