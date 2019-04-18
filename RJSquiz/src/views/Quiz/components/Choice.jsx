import React from "react";
import { Button } from "semantic-ui-react";

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

export default Choice;
