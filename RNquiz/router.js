import { Router, Scene, Stack } from "react-native-router-flux";

import Intro from "./src/components/Intro";
import Question from "./src/components/Question";
import React from "react";
import Results from "./src/components/Results";

const router = () => (
  <Router>
    <Stack key="root">
      <Scene 
        key="intro" 
        component={Intro}
        hideNavBar
        initial
      />
      <Scene 
        key="question" 
        component={Question}
        hideNavBar
      />
      <Scene 
        key="results" 
        component={Results} 
        hideNavBar
      />
    </Stack>
  </Router>
);

export default router;
