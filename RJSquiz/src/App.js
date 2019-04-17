import React, { Component } from "react"

import { createQuizData as quizData } from "./api/opentdb"
import Questions from "./components/Questions/Questions"
import Results from "./components/Results/Results"
import Scorebox from "./components/Scorebox/Scorebox"

import DevTools from "mobx-react-devtools";

import { Container } from "semantic-ui-react";

import "./App.scss"

const hasLoaded = loading => loading === false;
const allQuestionsAnswered = (current, questions) => current >= questions.length;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [],
      score: 0,
      current: 0,
      loading: null
    }
  }
  
  componentDidMount = async () => {
    this.setState({ loading: true })
    this.setState({ 
      questions: await quizData(), 
      loading: false 
    })
  }

  setCurrent = (current) => this.setState({ current })

  setScore = (score) => this.setState({ score })

  render() {
    const { loading, current, questions } = this.state;
    let ScoreboxUi = ""
    let ResultsUi = ""
    if (hasLoaded(loading)) {
      if (allQuestionsAnswered(current, questions)) {
        ResultsUi = <Results {...this.state} />
      } else {
        ScoreboxUi = <Scorebox {...this.state} />
      }
      return (
        <Container>
          {ScoreboxUi}
          <Questions
            current={this.state.current}
            questions={this.state.questions}
            score={this.state.score}
            setCurrent={this.setCurrent}
            setScore={this.setScore}
          />
          {ResultsUi}
          <DevTools />
        </Container>
      )
    } else {
      return null
    }
  }
}

export default App