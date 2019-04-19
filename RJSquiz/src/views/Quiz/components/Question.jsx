import { generate } from "shortid";
import { Header, Label } from "semantic-ui-react";
import { PropTypes } from "prop-types";
import React, { Component } from "react";

import Choice from "./Choice";
import ResultsLane from "./ResultsLane/ResultsLane";

const hasAnsweredQuestions = results => results.length !== 0;

export default class Question extends Component {
  render() {
    const {
      current,
      onAnswerSelect,
      question,
      results,
      score,
      shuffleChoices
    } = this.props;
    const { text, choices, category, difficulty } = question;
    return (
      <div className="question">
        {hasAnsweredQuestions(results) ? (
          <ResultsLane results={results} />
        ) : null}
        <div className="background">
          <Label color="black" className="difficulty">
            {difficulty}
          </Label>
          <Label color="grey" className="category">
            {category}
          </Label>
          <Header as="h2" text-align="center" className="title">
            {text}
          </Header>
          {shuffleChoices(choices).map((choice, index) => {
            return (
              <Choice
                choice={choice}
                current={current}
                index={index}
                key={generate()}
                onAnswerSelect={onAnswerSelect}
                question={question}
                score={score}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  current: PropTypes.number.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  shuffleChoices: PropTypes.func.isRequired
}