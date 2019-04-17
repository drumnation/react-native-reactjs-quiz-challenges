import React, { Component } from "react"

import { createQuizData as quizData } from "./api/opentdb"
import AppHeader from "./components/AppHeader/AppHeader"
import Questions from "./components/Questions/Questions"
import Results from "./components/Results/Results"
import Scorebox from "./components/Scorebox/Scorebox"

import DevTools from "mobx-react-devtools";

import "./styles/global.scss"

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
        <div className="appContainer">
          <AppHeader />
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
        </div>
      )
    } else {
      return null
    }
  }
}

export default App