import * as actions from "../../actions/index";

import { StyleSheet, Text } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-cross-platform-responsive-dimensions";

import React from "react";
import { connect } from "react-redux";

const white = "white";

const styles = StyleSheet.create({
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
  }
});

const QuestionInfo = props => [
  <Text key="a1" style={styles.categoryText}>
    {props.question.category}
  </Text>,
  <Text key="b2" style={styles.questionText}>
    {props.question.text}
  </Text>,
  <Text key="c3" style={styles.questionNumber}>
    {`${props.current} of ${props.questions.length}`}
  </Text>
];

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  current: state.quiz.current,
  question: state.quiz.question
});

export default connect(mapStateToProps, actions)(QuestionInfo);
