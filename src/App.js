import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Components/header";
import AboutMe from "./Components/aboutMe";
import Mywork from "./Components/myWork";
import SayHello from "./Components/sayHello";
import Footer from "./Components/footer";

export default class App extends Component {
  render() {
    return (
      <main className="App">
        <Route path={"/"} component={Header}></Route>
        <Route path={"/"} component={AboutMe}></Route>
        <Route path={"/"} component={Mywork}></Route>
        <Route path={"/"} component={SayHello}></Route>
        <Route path={"/"} component={Footer}></Route>
      </main>
    );
  }
}
