import React, { Component } from "react";

import { createQuizData as quizData } from "./api/opentdb";
import AppHeader from "./components/AppHeader/AppHeader";
import Questions from "./views/Questions/Questions";
import Results from "./views/Results/Results";
import Scorebox from "./components/Scorebox/Scorebox";
import { Loader, Dimmer } from "semantic-ui-react";

import DevTools from "mobx-react-devtools";

import "./styles/global.scss";

const hasLoaded = loading => loading === false;
const allQuestionsAnswered = (current, questions) =>
  current >= questions.length;

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 0,
      current: 0,
      loading: null
    };
  }

  componentDidMount = async () => {
    this.setState({ loading: true });
    this.setState({
      questions: await quizData(),
      loading: false
    });
  };

  setCurrent = current => this.setState({ current });

  setScore = score => this.setState({ score });

  render() {
    const { loading, current, questions, score } = this.state;
    if (hasLoaded(loading)) {
      return (
        <div className="appContainer">
          <AppHeader />
          {allQuestionsAnswered(current, questions) ? null : (
            <Scorebox current={current} questions={questions} score={score} />
          )}
          <Questions
            current={this.state.current}
            questions={this.state.questions}
            score={this.state.score}
            setCurrent={this.setCurrent}
            setScore={this.setScore}
          />
          {allQuestionsAnswered(current, questions) ? (
            <Results {...this.state} />
          ) : null}
          <DevTools />
        </div>
      );
    } else {
      return (
        <Dimmer active>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      );
    }
  }
}

export default Quiz;
