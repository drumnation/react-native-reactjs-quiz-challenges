import { generate } from "shortid";
import React from "react";

import Answer from "./Answer/Answer";

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

export default AnswerKey;
