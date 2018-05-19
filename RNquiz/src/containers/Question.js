import * as actions from "../actions/index";

import React, { Component } from "react";

import FeedbackNext from "../containers/Question/FeedbackNext";
import Loading from "../components/Intro/Loading";
import QuestionInfo from "../components/Question/QuestionInfo";
import TrueFalseButtons from "../containers/Question/TrueFalseButtons";
import { connect } from "react-redux";

class Question extends Component {
  render() {
    if (this.props.question) {
      return [
        <QuestionInfo key="heading" />,
        <TrueFalseButtons key="trueFalseButtons" />,
        <FeedbackNext key="feedbackNext" />
      ];
    } else {
      return <Loading />;
    }
  }
}

const mapStateToProps = state => ({
  question: state.quiz.question
});

export default connect(mapStateToProps, actions)(Question);
