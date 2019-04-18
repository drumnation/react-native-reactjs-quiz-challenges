import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Loader, Dimmer } from "semantic-ui-react";
import { observer } from "mobx-react";
import React, { Component } from "react";

import { StoreProvider } from "./components/StoreContext/StoreContext";
import AppHeader from "./components/AppHeader/AppHeader";
import Quiz from "./views/Quiz/Quiz";
import Results from "./views/Results/Results";

import "./styles/global.scss";

const hasLoaded = loading => loading === false;
const quizCompleted = (current, questions) => current >= questions.length;
@observer
class App extends Component {
  render() {
    const {
      createScoreMessage,
      current,
      loading,
      onAnswerSelect,
      percent,
      questions,
      results,
      score,
      setCurrent,
      setScore,
      shuffleChoices
    } = this.props.store;
    if (hasLoaded(loading)) {
      return (
        <StoreProvider value={this.props.store}>
          <div className="appContainer">
            <AppHeader />
            <Router>
              <Switch>
                {quizCompleted(current, questions) ? (
                  <Route
                    path="/"
                    exact
                    render={() => (
                      <Results
                        createScoreMessage={createScoreMessage}
                        current={current}
                        questions={questions}
                        percent={percent}
                        score={score}
                        setCurrent={setCurrent}
                        setScore={setScore}
                      />
                    )}
                  />
                ) : (
                  <Route
                    path="/"
                    exact
                    render={() => (
                      <Quiz
                        current={current}
                        onAnswerSelect={onAnswerSelect}
                        questions={questions}
                        results={results}
                        score={score}
                        setCurrent={setCurrent}
                        setScore={setScore}
                        shuffleChoices={shuffleChoices}
                      />
                    )}
                  />
                )}
              </Switch>
            </Router>
          </div>
        </StoreProvider>
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
