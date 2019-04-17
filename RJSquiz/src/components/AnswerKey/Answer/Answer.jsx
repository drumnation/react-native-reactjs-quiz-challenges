import React, { Fragment } from "react";

const Answer = ({ index, correct, text }) => {
  return (
    <Fragment>
      <center>
        <h4>Question {index + 1}</h4>
        {text}
        <br />
        <br />
        <h4>Answer</h4>
        {correct}
      </center>
      <hr />
    </Fragment>
  );
}

export default Answer;
