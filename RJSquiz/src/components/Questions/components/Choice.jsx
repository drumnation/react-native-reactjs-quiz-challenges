import React from "react";
import { Button } from "semantic-ui-react";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const Choice = ({ index, choice, onChange }) => {
  return (
    <div onClick={event => onChange(event, choice.text)}>
      <Button content={alphabet[index]} primary />
      <span className="questions question choice">{choice.text}</span>
    </div>
  );
};

export default Choice;
