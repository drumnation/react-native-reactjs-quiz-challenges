import React from "react";
import { Button } from "semantic-ui-react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Choice = ({ index, choice, onChange }) => {
  return (
    <div className="group" onClick={event => onChange(event, choice.text)}>
      <Button content={alphabet[index]} className="button" primary />
      <span className="choice">{choice.text}</span>
    </div>
  );
};

export default Choice;
