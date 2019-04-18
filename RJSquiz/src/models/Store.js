import { observable, action, computed } from "mobx";

import { createQuizData as quizData } from "../api/opentdb";

export default class Store {
  constructor () {
    this.getQuestions();
  }
  
  @observable current = 0;
  @observable loading = null;
  @observable questions = [];
  @observable score = 0;
  @observable results = [];

  @action
  updateQuizData = questions => (this.questions = questions);

  @action
  getQuestions = () => {
    this.toggleLoading(true);
    return quizData()
      .then(questions => {
        return this.updateQuizData(questions);
      })
      .then(questions => {
        this.toggleLoading(false);
        return questions;
      });
  };

  @action
  setCurrent = current => (this.current = current);

  @action
  toggleLoading = loading => (this.loading = loading);

  @action
  setScore = score => (this.score = score);

  @action
  onAnswerSelect = (event, choice, props) => {
    event.preventDefault();
    const { question, score, current } = props;
    const isCorrectChoice = (choice, question) => choice === question.correct;
    if (isCorrectChoice(choice, question)) {
      this.results.push("✓");
      this.setScore(score + 1);
      this.setCurrent(current + 1);
    } else {
      this.results.push("X");
      this.setCurrent(current + 1);
    }
  };

  @action
  shuffleChoices = choices => {
    const last = choices.length - 1;
    for (let index = last; index > 0; index--) {
      let index_2 = Math.floor(Math.random() * (index + 1));
      let temp = choices[index];
      choices[index] = choices[index_2];
      choices[index_2] = temp;
    }
    return choices;
  };

  @action
  createScoreMessage = percent => {
    let message = "";
    if (percent === 100) {
      message = "Perfect Score!";
    } else if (percent > 80) {
      message = "Awesome Job!";
    } else if (percent < 80 && percent > 60) {
      message = "You Did Ok!";
    } else {
      message = "Don't Quit your Day Job!";
    }
    return message;
  };

  @computed
  get percent() {
    return (this.score / this.questions.length) * 100;
  }
}
