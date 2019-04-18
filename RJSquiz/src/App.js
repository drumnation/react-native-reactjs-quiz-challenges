import { Loader, Dimmer } from "semantic-ui-react";
import DevTools from "mobx-react-devtools";
import React, { Component } from "react";

import { createQuizData as quizData } from "./api/opentdb";
import AppHeader from "./components/AppHeader/AppHeader";
import Quiz from "./views/Quiz/Quiz";
import Results from "./views/Results/Results";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/global.scss";

const hasLoaded = loading => loading === false;
const quizCompleted = (current, questions) =>
  current >= questions.length;

class App extends Component {
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
    const questions = await quizData();
    this.setState({
      questions,
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
          <Router>
            <Switch>
              {quizCompleted(
                current,
                questions
              ) ? (
                  <Route
                    path="/"
                    exact
                    render={() => (
                      <Results
                        current={current}
                        questions={questions}
                        score={score}
                        setCurrent={this.setCurrent}
                        setScore={this.setScore}
                      />
                    )}
                  />)
                : (
                  <Route
                    path="/"
                    exact
                    render={() => (
                      <Quiz
                        current={current}
                        questions={questions}
                        score={score}
                        setCurrent={this.setCurrent}
                        setScore={this.setScore}
                      />
                    )}
                  />
                )}
            </Switch>
          </Router>
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

export default App;
