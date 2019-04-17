import React, { Component } from "react";
import { Header, Label } from "semantic-ui-react";
import ResultsLane from "../../ResultsLane/ResultsLane";
import Choice from "./Choice";
import { generate } from "shortid";

var results = [];

const isCorrectChoice = (choice, question) => choice === question.correct;
const hasAnsweredQuestions = results => results.length !== 0;

export default class Question extends Component {
  onChange = (event, choice) => {
    event.preventDefault();
    const { setCurrent, setScore, question, score, current } = this.props;
    if (isCorrectChoice(choice, question)) {
      results.push("✓");
      setScore(score + 1);
      setCurrent(current + 1);
    } else {
      results.push("X");
      setCurrent(current + 1);
    }
  };

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

  render() {
    const { text, choices, category, difficulty } = this.props.question;
    return (
      <div className="question">
        {hasAnsweredQuestions(results) ? (
          <ResultsLane results={results} />
        ) : null}
        <div className="background">
          <Label color="black" className="difficulty">{difficulty}</Label>
          <Label color="grey" className="category">{category}</Label>
          <Header as="h2" text-align="center">
            {text}
          </Header>
          <hr />
          {this.shuffleChoices(choices).map((choice, index) => {
            return (
              <Choice
                choice={choice}
                index={index}
                key={generate()}
                onChange={this.onChange}
              />
            );
          })}
          
        </div>
      </div>
    );
  }
}
