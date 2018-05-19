import { StyleSheet, Text } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from "react-native-cross-platform-responsive-dimensions";

import Next from "../Common/Next";
import React from "react";

const white = "white";

const styles = StyleSheet.create({
  heading: {
    color: white,
    fontSize: responsiveFontSize(4),
    fontWeight: "900",
    marginTop: responsiveHeight(6),
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(3),
    textAlign: "center",
    width: responsiveWidth(90)
  },
  instruction: {
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
  }
});

const IntroLoaded = () => [
  <Text key="head" style={styles.heading}>
    Welcome to the{"\n"}Trivia Challenge!
  </Text>,
  <Text key="instruct" style={styles.instruction}>
    You will be presented{"\n"}with 10 True or False{"\n"}questions.
  </Text>,
  <Text key="message" style={styles.messageText}>
    Can you score 100%?
  </Text>,
  <Next key="next" buttonText="Begin" buttonType="next" />
];

export default IntroLoaded;
