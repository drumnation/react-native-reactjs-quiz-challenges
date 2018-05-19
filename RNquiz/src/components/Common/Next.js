import * as actions from "../../actions/index";

import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-cross-platform-responsive-dimensions";

import React from "react";
import { connect } from "react-redux";

const yellow = "#fed708";
const transparent = "transparent";
const black = "#000";

export const styles = StyleSheet.create({
  common: {
    backgroundColor: yellow,
    borderRadius: responsiveWidth(10),
    paddingBottom: responsiveHeight(3),
    paddingTop: responsiveHeight(3)
  },
  introContainer: {
    alignSelf: "center",
    marginTop: responsiveHeight(13),
    marginBottom: responsiveHeight(6),
    width: responsiveWidth(40)
  },
  questionContainer: {
    marginBottom: responsiveHeight(5),
    width: responsiveWidth(40)
  },
  resultsContainer: {
    alignSelf: "center",
    marginBottom: responsiveHeight(7),
    marginTop: responsiveHeight(7),
    width: responsiveWidth(60)
  },
  button: {
    backgroundColor: transparent,
    color: black,
    fontSize: responsiveFontSize(4),
    textAlign: "center"
  }
});

const Next = props => {
  const allQuestionsAnswered = props.current < props.questions.length;
  return (
    <TouchableOpacity
      style={
        props.current
          ? [styles.introContainer, styles.common]
          : allQuestionsAnswered
            ? [styles.questionContainer, styles.common]
            : [styles.resultsContainer, styles.common]
      }
      onPress={
        props.buttonType === "next" ? props.nextQuestion : props.playAgain
      }
    >
      <Text style={styles.button}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = state => ({
  quiz: state.quiz.current,
  questions: state.quiz.questions
});

export default connect(mapStateToProps, actions)(Next);
