import * as actions from "../../actions/index";

import { StyleSheet, Text } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-cross-platform-responsive-dimensions";

import React from "react";
import { connect } from "react-redux";

const green = "green";
const red = "red";
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
  }
});

const Feedback = props => {
  console.debug("CORRECT", props.correct);
  return (
    <Text
      style={[styles.categoryText, props.correct ? styles.true : styles.false]}
    >
      {props.correct
        ? "Great Job! That's correct."
        : "Sorry. That's not right."}
    </Text>
  );
};

const mapStateToProps = state => ({
  correct: state.quiz.correct
});

export default connect(mapStateToProps, actions)(Feedback);
