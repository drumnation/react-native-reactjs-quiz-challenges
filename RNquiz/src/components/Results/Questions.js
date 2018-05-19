import * as actions from "../../actions/index";

import { StyleSheet, Text, View } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-cross-platform-responsive-dimensions";

import React from "react";
import { connect } from "react-redux";

const white = "white";
const black = "#000";
const green = "green";
const red = "red";

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: responsiveHeight(100),
    justifyContent: "space-around"
  },
  scoreContainer: {
    backgroundColor: black,
    borderRadius: 20,
    marginTop: responsiveHeight(5),
    padding: 20
  },
  scoreText: {
    color: white,
    fontSize: responsiveFontSize(2.8),
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
    textAlign: "center"
  },
  row: {
    alignItems: "center",
    backgroundColor: white,
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    marginTop: responsiveHeight(4),
    width: responsiveWidth(100)
  },
  question: {
    color: black,
    flex: 0.85,
    fontSize: responsiveFontSize(2),
    paddingBottom: responsiveHeight(4),
    paddingTop: responsiveHeight(4)
  },
  true: {
    color: green,
    flex: 0.1,
    fontSize: responsiveFontSize(5),
    marginLeft: responsiveWidth(3)
  },
  false: {
    color: red,
    flex: 0.1,
    fontSize: responsiveFontSize(5),
    marginLeft: responsiveWidth(3)
  }
});

const Questions = props => {
  return props.questions.map((question, i) => (
    <View key={question.text} style={styles.row}>
      <Text
        style={[styles.question, props.results[i] ? styles.true : styles.false]}
      >
        {props.results[i] ? "+" : "–"}
      </Text>
      <Text style={styles.question}>{question.text}</Text>
    </View>
  ));
};

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  results: state.quiz.results
});

export default connect(mapStateToProps, actions)(Questions);
