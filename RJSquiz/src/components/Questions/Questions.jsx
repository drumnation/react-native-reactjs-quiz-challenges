import { generate } from "shortid";
import React, { Fragment } from "react";

import Question from "./components/Question";

const isCurrentQuestion = (id, current) => id === current;

const Questions = ({ questions, current, setScore, setCurrent, score }) => {
  return (
    <Fragment>
      {questions.map(question => {
        const { id } = question;
        return isCurrentQuestion(id, current) ? (
          <Question
            current={current}
            key={generate()}
            question={question}
            score={score}
            setCurrent={setCurrent}
            setScore={setScore}
          />
        ) : null;
      })}
    </Fragment>
  );
};

export default Questions;
