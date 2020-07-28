import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Intro from "./Pages/Intro";
import Features1 from "./Pages/Features1";
import Features2 from "./Pages/Features2";
import Features3 from "./Pages/Features3";
import Company from "./Pages/Company";

function App() {
  return (
    <ReactFullpage
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <Intro />
            <Features1 />
            <Features2 />
            <Features3 />
            <Company />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
