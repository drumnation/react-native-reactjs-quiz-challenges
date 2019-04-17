import React from "react";

const Scorebox = ({ current, questions, score }) => {
  return (
    <div className="scorebox">
      <center>
        Question <strong>{current + 1}</strong> of{" "}
        <strong>{questions.length}</strong>
        <br />
        Score
        <span className="scorebox score">{score}</span>
      </center>
    </div>
  );
};

export default Scorebox;
