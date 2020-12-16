import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/header";
import AboutMe from "./Components/aboutMe";
import Mywork from "./Components/myWork";

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Route path={"/"} component={Header}></Route>
        <Route path={"/"} component={AboutMe}></Route>
        <Route path={"/"} component={Mywork}></Route>
      </main>
    );
  }
}
