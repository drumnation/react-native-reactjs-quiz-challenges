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

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: yellow,
    borderRadius: responsiveWidth(10),
    marginBottom: responsiveHeight(5),
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

const Condition = props => (
  <TouchableOpacity
    style={styles.buttonContainer}
    onPress={() => props.handleTrueFalse(props.bool)}
  >
    <Text style={styles.buttonText}>{props.text}</Text>
  </TouchableOpacity>
);

export default connect(null, actions)(Condition);
