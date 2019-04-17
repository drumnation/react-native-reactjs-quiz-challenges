import React from "react";
import { Container } from "semantic-ui-react";
import { generate } from "shortid";

const isX = result => result === "X";

const resultStyle = result =>
  isX(result)
    ? { color: "#FF0000" } 
    : { color: "#008000" };

const ResultsLane = ({ results }) => {
  
  return (
    <Container text-align="center" className="results">
      {results.map(result => {
        return (
          <span key={generate()} style={resultStyle(result)}>
            {`   ${result}   `}
          </span>
        );
      })}
    </Container>
  );
};
export default ResultsLane;
