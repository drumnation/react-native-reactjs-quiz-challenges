import { Button, Header, Icon, Label } from "semantic-ui-react";
import React from "react";

import AnswerKey from "../../components/AnswerKey/AnswerKey";

import "./style.scss";

const createScoreMessage = percent => {
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

const Results = ({ score, questions }) => {
  const percent = (score / questions.length) * 100;
  return (
    <div className="results">
      <Header className="scores">
        <h1>
          You Got {score} out of {questions.length} Correct
        </h1>
        <Label size="massive" color="blue">
          {percent}%
        </Label>
        <hr />
        <h1>{createScoreMessage(percent)}</h1>
        <hr />
        <center>
          <Button color="green" href="/" size="huge">
            <Icon className="sync" />
            Take Again
          </Button>
        </center>
      </Header>
      <div className="answer-key">
        <center>
          <Header as="h1">Answer Key</Header>
        </center>
        <hr />
        <AnswerKey questions={questions} />
      </div>
    </div>
  );
};

export default Results;
