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

const styles = StyleSheet.create({
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
  }
});

const ScoreInfo = props => (
  <View style={styles.scoreContainer}>
    <Text style={styles.scoreText}>{`You Scored ${props.score} / ${
      props.questions.length
    }`}</Text>
  </View>
);

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  score: state.quiz.score
});

export default connect(mapStateToProps, actions)(ScoreInfo);
