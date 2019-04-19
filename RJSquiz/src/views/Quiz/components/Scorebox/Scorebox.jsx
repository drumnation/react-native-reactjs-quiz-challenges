import { Label } from "semantic-ui-react";
import { PropTypes } from "prop-types";
import React from "react";

import "./style.scss";

const Scorebox = ({ current, questions, score }) => {
  return (
    <div className="scorebox">
      <div className="group">
        <Label color="orange" size="massive" className="question">
          Question
        </Label>
        <div className="length">
          <strong>{current + 1}</strong> of <strong>{questions.length}</strong>
        </div>
      </div>
      <div className="group">
        <Label color="orange" size="massive" className="score-label">
          Score
        </Label>
        <div className="score">{score}</div>
      </div>
    </div>
  );
};

Scorebox.propTypes = {
  current: PropTypes.number.isRequired,
  questions: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
}

export default Scorebox;
