import React from "react";
import GlobalStyles from "./styles/global";
import { Main, Section, Sticky } from "./styles";
import FisrtAndSecond from "./components/FisrtAndSecond";
function App() {
  return (
    <>
      <GlobalStyles />
      <Main style={{ height: "1610vh" }}>
        <Section style={{ height: "72.7%" }}>
          <FisrtAndSecond />
        </Section>

        <Section style={{ height: "9.7%" }}>
          <Sticky className="third"></Sticky>
        </Section>

        <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth"></Sticky>
        </Section>
      </Main>
    </>
  );
}

export default App;
