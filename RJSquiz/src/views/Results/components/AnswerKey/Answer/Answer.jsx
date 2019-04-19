import { Label, Header } from "semantic-ui-react"
import PropTypes from "prop-types";
import React, { Fragment } from "react";

const Answer = ({ index, correct, text }) => {
  return (
    <Fragment>
      <center>
        <Label size="huge" color="black">Question {index + 1}</Label>
        <Header as="h3">{text}</Header>
        <Label size="huge" color="orange">Answer</Label>
        <Header as="h1">{correct}</Header>
      </center>
      <hr />
    </Fragment>
  );
}

Answer.propTypes = {
  correct: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Answer;
