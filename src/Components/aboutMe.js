import React, { Component } from "react";
import { Spring } from "react-spring";
import cicon from "../Images/iconweb.png";
import hist from "../Images/historyicon.png";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme">
        <section className="me">
          <h2 id="build">Hello, I build things on the internet</h2>
        </section>
        <section className="skills">
          <div className="uno">
            <img className="iconweb" src={cicon} />

            <h2 id="I">
              I’m a front-end web developer, trying to practice kindness and
              compassion as a way of life and respect for our planet.
            </h2>

            <h2>Languages I speak</h2>
            <ul className="lenguages">
              <li>Javascript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>Python</li>
            </ul>
            <br />
            <br />
            <h2>Dev Tools and Frameworks</h2>
            <ul className="tools">
              <li>React</li>
              <li>jQuery</li>
              <li>GitHub</li>
              <li>Vercel</li>
              <li>NPM/Yarn</li>
              <li>Jest</li>
            </ul>
            <ul className="tools2">
              <li>Node.js</li>
              <li>PostgreSQL</li>
              <li>Express</li>
              <li>Terminal</li>
              <li>VS Code</li>
              <li>Heroku</li>
            </ul>
            <br />
            <br />
            <br />
            <img className="iconweb" src={hist} alt="information icon" />

            <p className="sectionName" id="zero">
              About Me
            </p>

            <p className="bio">
              I live and work in New York City. I love dogs, talking to people,
              working with a team and web development. I'm also great at cooking
              and making my own bread. I run consistently and meditate
              diligently."
              <br />
              <br />
              <br />
              Besides web development and programming, I have experience working
              in finance and only payment processing.
              <br />
              <br />
              <br />
              I've lived and worked in the U.K. Italy, Spain, Mexico and the US.{" "}
              <br />
              <br />
              <br />I believe everyone is here to learn and be happy. My purpose
              and goal in life is to create beautiful functional solutions that
              can help people achieve their goals.
            </p>
          </div>
          <hr />
        </section>
      </div>
    );
  }
}
