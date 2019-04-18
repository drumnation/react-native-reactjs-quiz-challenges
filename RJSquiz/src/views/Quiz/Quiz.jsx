import { generate } from "shortid";
import React, { Fragment } from "react";
import Scorebox from "./components/Scorebox/Scorebox";

import Question from "./components/Question";

import "./style.scss";

const isCurrentQuestion = (id, current) => id === current;

const Quiz = ({
  current,
  onAnswerSelect,
  questions,
  results,
  score,
  setCurrent,
  setScore,
  shuffleChoices
}) => {
  return (
    <div className="quiz">
      {questions.map(question => {
        const { id } = question;
        return isCurrentQuestion(id, current) ? (
          <Fragment key={generate()}>
            <Scorebox current={current} questions={questions} score={score} />
            <Question
              current={current}
              onAnswerSelect={onAnswerSelect}
              question={question}
              results={results}
              score={score}
              setCurrent={setCurrent}
              setScore={setScore}
              shuffleChoices={shuffleChoices}
            />
          </Fragment>
        ) : null;
      })}
    </div>
  );
};

export default Quiz;
