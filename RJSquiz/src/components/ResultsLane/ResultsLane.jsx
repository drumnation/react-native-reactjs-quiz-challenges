import React from "react";
import { generate } from "shortid";

const resultStyle = result => {
  const isX = result => result === "X";
  return isX(result)
    ? { color: "#FF0000" } 
    : { color: "#008000" };
}

const ResultsLane = ({ results }) => {
  return (
    <div text-align="center" className="results-lane">
      {results.map(result => {
        return (
          <span key={generate()} style={resultStyle(result)}>
            {`   ${result}   `}
          </span>
        );
      })}
    </div>
  );
};
export default ResultsLane;
