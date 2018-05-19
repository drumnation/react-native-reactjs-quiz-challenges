import * as actions from "../actions/index";

import React, { Component } from "react";

import IntroLoaded from "../components/Intro/IntroLoaded";
import Loading from "../components/Intro/Loading";
import { connect } from "react-redux";

class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = async () => {
    await this.props.loading(true);
    await this.props.createQuizData(10, "hard", "boolean");
    await this.props.loading(false);
  };

  render() {
    return !this.props.isLoading ? <IntroLoaded /> : <Loading />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.quiz.isLoading
});

export default connect(mapStateToProps, actions)(Intro);
