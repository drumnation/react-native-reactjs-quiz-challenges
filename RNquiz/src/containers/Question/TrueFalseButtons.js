import * as actions from "../../actions/index";

import Condition from "../../components/Question/Condition";
import React from "react";
import { connect } from "react-redux";

const TrueFalseButtons = props =>
  !props.answered
    ? [
        <Condition key="trueButton" bool="True" text="True" />,
        <Condition key="falseButton" bool="False" text="False" />
      ]
    : null;

const mapStateToProps = state => ({
  answered: state.quiz.answered
});

export default connect(mapStateToProps, actions)(TrueFalseButtons);
