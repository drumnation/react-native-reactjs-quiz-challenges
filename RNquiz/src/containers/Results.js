import { ScrollView, StyleSheet } from "react-native";

import Next from "../components/Common/Next";
import Questions from "../components/Results/Questions";
import React from "react";
import ScoreInfo from "../components/Results/ScoreInfo";
import { responsiveHeight } from "react-native-cross-platform-responsive-dimensions";

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: responsiveHeight(100),
    justifyContent: "space-around"
  }
});

const Results = () => (
  <ScrollView styles={styles.scrollContainer}>
    <ScoreInfo />
    <Questions />
    <Next buttonText="Play Again?" buttonType="play-again" />
  </ScrollView>
);

export default Results;
