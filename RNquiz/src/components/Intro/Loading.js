import { ActivityIndicator, StyleSheet, Text } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight
} from "react-native-cross-platform-responsive-dimensions";

import React from "react";

const orange = "#FF8C00";
const white = "white";

const styles = StyleSheet.create({
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
  }
});

const Loading = () => [
  <ActivityIndicator
    color={orange}
    key="loading"
    size="large"
    style={styles.activityIndicator}
  />,
  <Text key="loadingText" style={styles.loading}>
    Loading...
  </Text>
];

export default Loading;
