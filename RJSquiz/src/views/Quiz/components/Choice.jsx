import { Button } from "semantic-ui-react";
import { PropTypes } from "prop-types";
import React from "react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Choice = ({ index, choice, onAnswerSelect, ...other }) => {
  const { text } = choice;
  return (
    <div className="group" onClick={event => onAnswerSelect(event, text, other)}>
      <Button content={alphabet[index]} className="button" primary />
      <span className="choice">{choice.text}</span>
    </div>
  );
};

Choice.propTypes = {
  current: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onAnswerSelect: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired,
}

export default Choice;
