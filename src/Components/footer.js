import React, { Component } from "react";

export default class SayHello extends Component {
  render() {
    return (
      <footer>
        <div class="footer">
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
      </footer>
    );
  }
}
