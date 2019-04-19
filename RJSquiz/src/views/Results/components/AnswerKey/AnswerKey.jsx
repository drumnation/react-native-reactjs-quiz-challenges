import { generate } from "shortid";
import { PropTypes } from "mobx-react";
import React from "react";

import Answer from "./Answer/Answer";

import "./style.scss";

const AnswerKey = ({ questions }) => {
  return (
    <div className="answer-key">
      {questions.map((question, index) => {
        const { correct, text } = question;
        return (
          <Answer
            key={generate()}
            correct={correct}
            text={text}
            index={index}
          />
        );
      })}
    </div>
  );
};

AnswerKey.propTypes = {
  questions: PropTypes.observableArray.isRequired
}

export default AnswerKey;
