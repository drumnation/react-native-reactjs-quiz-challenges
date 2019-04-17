import { generate } from "shortid";
import React from "react";

import Question from "./components/Question";

const isCurrentQuestion = (id, current) => id === current;

const Questions = ({ questions, current, setScore, setCurrent, score }) => {
  return (
    <div className="questions">
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
    </div>
  );
};

export default Questions;
