import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Intro from "./Pages/Intro";
import Features1 from "./Pages/Features1";
import Features2 from "./Pages/Features2";
import Features3 from "./Pages/Features3";
import Contact from "./Pages/Contact";
import Features4 from "./Pages/Features4";

function App() {
  return (
    <div className="font-noto-sans-kr">
      <ReactFullpage
        licenseKey={"$ko8JTT^q6"}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Intro />
              <Features1 />
              <Features2 />
              <Features3 />
              <Features4 />
              <Contact />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default App;
