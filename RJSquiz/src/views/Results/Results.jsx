import { Button, Header, Icon, Label } from "semantic-ui-react";
import React from "react";
import PropTypes from "prop-types";
import AnswerKey from "./components/AnswerKey/AnswerKey";

import "./style.scss";

const Results = ({ createScoreMessage, questions, percent, score }) => {
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

Results.propTypes = {
  createScoreMessage: PropTypes.func.isRequired,
  percent: PropTypes.number.isRequired,
  questions: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired
}

export default Results;
