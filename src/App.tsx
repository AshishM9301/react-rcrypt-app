import React from "react";

import { AppContainer, AppWrapper } from "./Assets/styles/AppStyles";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

export default class App extends React.Component {
  render() {
    return (
      <AppWrapper>
        <AppContainer>
          <Navbar />
          <Home />
        </AppContainer>
      </AppWrapper>
    );
  }
}
