import { ImageBackground, StyleSheet } from "react-native";
import React, { Component } from "react";

const transparent = "transparent";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: transparent,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    height: null,
    justifyContent: "space-around",
    width: null
  }
});

const ImageBackgroundHOC = MainComponent =>
  class AppWrapper extends Component {
    render() {
      return (
        <ImageBackground
          source={require("../assets/images/bg.jpg")}
          style={styles.container}
          resizeMode="cover"
        >
          <MainComponent {...this.props} />
        </ImageBackground>
      );
    }
  };

export default ImageBackgroundHOC;
