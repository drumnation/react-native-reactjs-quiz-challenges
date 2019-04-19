import { generate } from "shortid";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import Question from "./components/Question";
import Scorebox from "./components/Scorebox/Scorebox";

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

Quiz.propTypes = {
  current: PropTypes.number.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  questions: PropTypes.object.isRequired,
  results: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
  setScore: PropTypes.func.isRequired,
  shuffleChoices: PropTypes.func.isRequired
}

export default Quiz;
