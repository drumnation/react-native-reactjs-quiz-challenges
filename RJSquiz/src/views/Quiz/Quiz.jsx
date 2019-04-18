import { generate } from "shortid";
import React, { Fragment } from "react";
import Scorebox from "./components/Scorebox/Scorebox";

import Question from "./components/Question";

import "./style.scss";

const isCurrentQuestion = (id, current) => id === current;

const Quiz = ({ questions, current, setScore, setCurrent, score }) => {
  console.log("TCL: Quiz -> questions, current, setScore, setCurrent, score", questions, current, setScore, setCurrent, score)
  console.log("TCL: Quiz -> current", current)
  return (
    <div className="quiz">
      {questions.map(question => {
        const { id } = question;
        return isCurrentQuestion(id, current) ? (
          <Fragment>
            <Scorebox current={current} questions={questions} score={score} />
            <Question
              current={current}
              key={generate()}
              question={question}
              score={score}
              setCurrent={setCurrent}
              setScore={setScore}
            />
          </Fragment>
        ) : <div>No Questions...</div>;
      })}
    </div>
  );
};

export default Quiz;
