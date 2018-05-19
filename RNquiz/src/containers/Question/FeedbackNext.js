import * as actions from "../../actions/index";

import Feedback from "../../components/Question/Feedback";
import Next from "../../components/Common/Next";
import React from "react";
import { connect } from "react-redux";

const FeedbackNext = props => {
  return props.answered
    ? [
        <Feedback key="feedback" />,
        <Next key="next" buttonText="Next" buttonType="next" />
      ]
    : null;
};

const mapStateToProps = state => ({
  answered: state.quiz.answered
});

export default connect(mapStateToProps, actions)(FeedbackNext);
