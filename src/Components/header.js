import React, { Component } from "react";
import "./header.css";
export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="name">
          <h1 id="name">Marco Coronado</h1>
          <h4 id="port">portfolio.</h4>
        </div>

        <div className="headerlinks">
          <ul className="nav-links">
            <li className="button">
              <a href="#zero" className="nounder">
                About Me
              </a>
            </li>
            <li className="button">
              <a href="#uno" className="nounder">
                My Work
              </a>
            </li>
            <li className="button">
              <a href="#dos" className="nounder">
                Say Hello
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
