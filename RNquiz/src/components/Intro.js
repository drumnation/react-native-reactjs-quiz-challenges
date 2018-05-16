import * as actions from "../actions/index";

import { ActivityIndicator, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
const orange = "#FF8C00";

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
  headingText: {
    color: white,
    fontSize: responsiveFontSize(4),
    fontWeight: "900",
    marginTop: responsiveHeight(6),
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
    textAlign: "center",
    width: responsiveWidth(90)
  },
  instructionText: {
    color: white,
    fontSize: responsiveFontSize(3.5),
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(7),
    padding: 20,
    textAlign: "center"
  },
  messageText: {
    color: white,
    fontSize: responsiveFontSize(3),
    textAlign: "center",
    marginTop: responsiveHeight(7)
  },
  activityIndicator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: responsiveHeight(20)
  },
  loading: {
    color: white,
    fontSize: responsiveFontSize(5),
    marginTop: responsiveHeight(15)
  },
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: yellow,
    borderRadius: responsiveWidth(10),
    marginTop: responsiveHeight(13),
    marginBottom: responsiveHeight(6),
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
class Intro extends Component {
  state = { bg: require("../images/bg.jpg")}

  componentDidMount = async () => {
    await this.props.loading(true);
    await this.props.createQuizData(10, "hard", "boolean");
    await this.props.loading(false);
  }

  nextQuestion = () => {
    this.props.incrementQuestion();
    Actions.question({ type: "reset" });
  }

  render() {
    return (
      <ImageBackground source={this.state.bg} style={styles.container} resizeMode="cover">
        {!this.props.isLoading
          ? (<View>
              <Text style={styles.headingText}>Welcome to the{"\n"}Trivia Challenge!</Text>
              <Text style={styles.instructionText}>You will be presented{"\n"}with 10 True or False{"\n"}questions.</Text>
              <Text style={styles.messageText}>Can you score 100%?</Text>
              <TouchableOpacity key="next" style={styles.buttonContainer} onPress={this.nextQuestion}>
                <Text style={styles.buttonText}>Begin</Text>
              </TouchableOpacity>
            </View>)
            : (<View>
                  <ActivityIndicator
                    color={orange}
                    key="3"
                    size="large"
                    style={styles.activityIndicator}
                  />
                  <Text style={styles.loading}>Loading...</Text>
              </View>)}
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.quiz.questions,
  current: state.quiz.current,
  score: state.quiz.score,
  isLoading: state.quiz.isLoading
});

export default connect(mapStateToProps, actions)(Intro) 