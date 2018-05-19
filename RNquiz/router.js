import React, { Component } from "react";
import { Router, Scene, Stack } from "react-native-router-flux";

import ImageBackgroundHOC from "./src/HOCs/ImageBackgroundHOC";
import Intro from "./src/containers/Intro";
import Question from "./src/containers/Question";
import Results from "./src/containers/Results";

class router extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene
            key="intro"
            component={ImageBackgroundHOC(Intro)}
            hideNavBar
            initial
          />
          <Scene
            key="question"
            component={ImageBackgroundHOC(Question)}
            hideNavBar
          />
          <Scene
            key="results"
            component={ImageBackgroundHOC(Results)}
            hideNavBar
          />
        </Stack>
      </Router>
    );
  }
}

export default router;
