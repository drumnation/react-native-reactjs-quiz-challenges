import * as actions from "../actions/index";

import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  },
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: yellow,
    borderRadius: responsiveWidth(10),
    marginBottom: responsiveHeight(6),
    marginTop: responsiveHeight(6),
    paddingBottom: responsiveHeight(3),
    paddingTop: responsiveHeight(3),
    width: responsiveWidth(70)
  },
  buttonText: {
    backgroundColor: transparent,
    color: black,
    fontSize: responsiveFontSize(4),
    textAlign: "center"
  }
});
class Results extends Component {
  state = { bg: require("../images/bg.jpg") }

  playAgain = async () => {
    await this.props.loading(true);
    await this.props.setScore(0);
    await this.props.setCurrentQuestion(0);
    await Actions.intro({type: "reset"});
    await this.props.createQuizData(10, "hard", "boolean");
    await this.props.setResults([]);
    await this.props.loading(false);
  }

  render() {
    return (
      <ImageBackground source={this.state.bg} style={styles.container} resizeMode="cover">
        <ScrollView styles={styles.scrollContainer}>
          <View style={styles.scoreContainer}><Text style={styles.scoreText}>{`You Scored ${this.props.score} / ${this.props.questions.length}`}</Text></View>
          {this.props.questions.map((question, i) => (
            <View key={`question_${i}`} style={styles.row}>
              <Text style={[styles.question, this.props.results[i] ? styles.true : styles.false]}>{this.props.results[i] ? "+" : "–"}</Text>
              <Text style={styles.question}>{question.text}</Text>
            </View>
            
          ))}
          <TouchableOpacity key="next" style={styles.buttonContainer} onPress={this.playAgain}>
            <Text style={styles.buttonText}>Play Again?</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  current: state.quiz.current,
  questions: state.quiz.questions,
  score: state.quiz.score,
  results: state.quiz.results
});

export default connect(mapStateToProps, actions)(Results);