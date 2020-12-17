import React, { Component } from "react";
import email from "../Images/emailicon.png";
import linkedin from "../Images/linkedinicon.png";
import githubicon from "../Images/githubicon.png";
import "./header.css";

export default class SayHello extends Component {
  render() {
    return (
      <div className="dos" id="dos">
        <p className="sectionName">Contact Me</p>
        <div className="contacts">
          <div className="emailcontact">
            <img src={email} alt="image of an envelope icon" />
            <a href="mailto:marco@mcnyc.net">
              <br />
              <span>marco@mcnyc.net</span>
            </a>
          </div>

          <div className="githubimg">
            <img className="githubimg" src={githubicon} alt="github icon" />
            <a href="https://github.com/mcodt1702" target="_blank">
              <br />
              <span>mcodt1702</span>
            </a>
          </div>

          <div className="lilinkedin">
            <img className="linkedin" src={linkedin} alt="linkedin icon" />
            <a href="https://www.linkedin.com/in/mcnyc1/" target="blank">
              <br />
              <span>mcnyc1</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
