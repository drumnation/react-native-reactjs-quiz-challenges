import "./App.css"

import React, { Component } from "react"
import QuestionList from "./components/quiz/QuestionList"
import Scorebox from "./components/quiz/Scorebox"
import Results from "./components/quiz/Results"
import { createQuizData as quizData } from "./api/opentdb"

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
    if (this.state.loading === false) {
      if (this.state.current >= this.state.questions.length) {
        var scorebox = ""
        var results = <Results {...this.state} />
      } else {
        scorebox = <Scorebox {...this.state} />
        results = ""
      }
      return (
        <div>
          {scorebox}
          <QuestionList
            {...this.state}
            setCurrent={this.setCurrent}
            setScore={this.setScore}
          />
          {results}
        </div>
      )
    } else {
      return null
    }
  }
}

export default App