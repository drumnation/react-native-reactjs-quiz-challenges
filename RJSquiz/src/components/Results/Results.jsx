import { Button, Well } from "react-bootstrap";
import React, { Fragment } from "react";

import AnswerKey from "../AnswerKey/AnswerKey";

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
    <Fragment>
      <Well>
        <center>
          <h4>
            You Got {score} out of {questions.length} Correct
          </h4>
          <h1>{percent}%</h1>
          <hr />
          <h2>{createScoreMessage(percent)}</h2>
        </center>
        <hr />
        <center>
          <Button bsStyle="success" href="/">
            Take Again
          </Button>
        </center>
      </Well>
      <Well>
        <center>
          <h3>Answer Key</h3>
        </center>
        <hr />
        <AnswerKey questions={questions} />
      </Well>
    </Fragment>
  );
};

export default Results;
