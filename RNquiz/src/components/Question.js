import * as actions from "../actions/index";

import { ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-cross-platform-responsive-dimensions";

import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

const transparent = "transparent";
const white = "white";
const yellow = "#fed708";
const black = "#000";
const green = "green";
const red = "red";

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    backgroundColor: transparent,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: null,
    justifyContent: "space-around",
    width: null
  },
  categoryText: {
    color: white,
    fontSize: responsiveFontSize(2.8),
    fontWeight: "900",
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
    marginTop: responsiveHeight(3),
    textAlign: "center",
    width: responsiveWidth(90)
  },
  questionText: {
    borderColor: white,
    borderStyle: "solid",
    borderWidth: 1,
    color: white,
    fontSize: responsiveFontSize(3.5),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(3),
    padding: 20,
    textAlign: "center"
  },
  questionNumber: {
    color: white,
    fontSize: responsiveFontSize(3),
    textAlign: "center"
  },
  true: {
    borderColor: green,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 20
  },
  false: {
    borderColor: red,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 20
  },
  buttonContainer: {
    backgroundColor: yellow,
    borderRadius: responsiveWidth(10),
    marginBottom: responsiveHeight(5),
    paddingBottom: responsiveHeight(3),
    paddingTop: responsiveHeight(3),
    width: responsiveWidth(40)
  },
  buttonText: {
    backgroundColor: transparent,
    color: black,
    fontSize: responsiveFontSize(4),
    textAlign: "center"
  }
});
class Question extends Component {
  state = { 
    question: this.props.questions[this.props.current - 1], 
    bg: require("../images/bg.jpg"), 
    answered: false,
    isCorrect: null
  }
  
  handleTrue = () => {
    if (this.state.question.correct == "True") {
      this.props.incrementScore();
      this.props.addToResults(true);
      this.setState({ isCorrect: true });
    } else {
      this.props.addToResults(false);
      this.setState({ isCorrect: false });
    }
    this.setState({ answered: true });
  }

  handleFalse = () => {
    if (this.state.question.correct == "False") {
      this.props.incrementScore();
      this.props.addToResults(true)
      this.setState({ isCorrect: true });
    } else {
      this.props.addToResults(false);
      this.setState({ isCorrect: false });
    }
    this.setState({ answered: true });
  }

  nextQuestion = () => {
    if (this.props.current < this.props.questions.length) {
      this.props.incrementQuestion();
    } else {
      Actions.results({ type: "reset" });
    }
    this.setState({ answered: false })
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    if (nextProps.current !== this.props.current) {
      this.setState({ question: this.props.questions[nextProps.current - 1]});
    }
  }

  render() {
    return (
      <ImageBackground source={this.state.bg} style={styles.container} resizeMode="cover">
        <Text style={styles.categoryText}>{this.state.question.category}</Text>
        <Text style={styles.questionText}>{this.state.question.text}</Text>
        <Text style={styles.questionNumber}>{`${this.props.current} of ${this.props.questions.length}`}</Text>
        {!this.state.answered
          ? ([<TouchableOpacity key="true" style={styles.buttonContainer} onPress={this.handleTrue}>
              <Text style={styles.buttonText}>True</Text>
            </TouchableOpacity>,
            <TouchableOpacity key="false" style={styles.buttonContainer} onPress={this.handleFalse}>
              <Text style={styles.buttonText}>False</Text>
            </TouchableOpacity>])
          : null}
        {this.state.answered
          ? ([<Text key="good-job" style={[styles.categoryText, this.state.isCorrect ? styles.true : styles.false]}>{this.state.isCorrect ? "Great Job! That's correct." : "Sorry. That's not right."}</Text>,
            <TouchableOpacity key="next" style={styles.buttonContainer} onPress={this.nextQuestion}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>])
          : null}
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  current: state.quiz.current,
  score: state.quiz.score
});

export default connect(mapStateToProps, actions)(Question)