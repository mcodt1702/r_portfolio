import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header>
        <div class="name">
          <h1 id="name">Marco Coronado</h1>
          <h4 id="port">portfolio.</h4>
        </div>
        <a id="tagmenu" href="./html/today.html">
          <img
            id="hmenu"
            src="../images/hamburguermenu.png"
            alt="hamburger menu"
          />
        </a>

        <div class="headerlinks">
          <ul class="nav-links">
            <li class="button">
              <a href="#zero" class="nounder">
                About Me
              </a>
            </li>
            <li class="button">
              <a href="#uno" class="nounder">
                My Work
              </a>
            </li>
            <li class="button">
              <a href="#dos" class="nounder">
                Say Hello
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
