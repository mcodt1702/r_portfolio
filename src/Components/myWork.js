import React, { Component } from "react";
import "./header.css";
import bookapp from "../Images/bookapp.png";
import geta from "../Images/getameal_signedin.png";
import getaw from "../Images/getameallanding.png";
import ever from "../Images/everRecipesStartPage.png";
import quiz from "../Images/Capture.PNG";
import bookmark from "../Images/bookmarks.PNG";

export default class Mywork extends Component {
  render() {
    return (
      <div className="uno" id="uno">
        <p className="sectionName">My Work</p>
        <div className="bookapp">
          <h2>BookApp</h2>
          <img
            className="apps"
            src={bookapp}
            alt="image of landing page for the booking application"
          />
          <br />

          <span>
            <a
              className="clicktoplay"
              href="https://bookapp-api.vercel.app/"
              target="_blank"
            >
              <br />
              Click Here To "BookApp".
            </a>
          </span>
          <p className="appdescription">
            BookApp allows the user to reserve a place for a particular event or
            venue. It helps venues to control the number of people that attend a
            particular event. <br />
          </p>
          <p className="appdescription">
            Technology: React, Node, PostgreSQL, HTML, CSS, JavaScript, ,
            Express.
          </p>
          <p className="appdescription">
            Github Repo Client:
            <a href="https://github.com/mcodt1702/bookapp-app" target="_blank">
              https://github.com/mcodt1702/bookapp-app
            </a>
            <br />
            Github Repo Server:
            <a
              href="https://github.com/mcodt1702/bookapp-server-api"
              target="_blank"
            >
              https://github.com/mcodt1702/bookapp-server-api
            </a>
          </p>
        </div>
        <hr />
        <div className="getameal">
          <h2>Geta-Meal</h2>
          <img
            className="apps"
            src={getaw}
            alt="image of landing page for geta_meal"
          />
          <br />
          <img className="apps" src={geta} alt="image of getameal_signedin" />

          <span>
            <a
              className="clicktoplay"
              href="https://geta-meal-app-90kfinc0q.vercel.app/"
              target="_blank"
            >
              <br />
              Click Here To "GetA Meal".
            </a>
          </span>
          <p className="appdescription">
            The "GET-A-MEAL" APP gathers information from restaurants in a
            geographica delimited area and allows the user to log in search by
            type of food select items from the menu and place an order to be
            delivered. The restaurant user can create a user upload his
            restaurant information create add and delete food items to his mene.
            <br />
          </p>
          <p className="appdescription">
            Technology: React, Node, PostgreSQL, HTML, CSS, JavaScript, jQuery,
            . Express.
          </p>
          <p className="appdescription">
            Github Repo Client:
            <a
              href="https://github.com/mcodt1702/geta-meal-app"
              target="_blank"
            >
              https://github.com/mcodt1702/geta-meal-app
            </a>
            <br />
            Github Repo Server:
            <a
              href="https://github.com/mcodt1702/geta-meal-serverAPI"
              target="_blank"
            >
              https://github.com/mcodt1702/geta-meal-serverAPI
            </a>
          </p>
        </div>
        <hr />
        <br />
        <br />
        <div className="everRecipes">
          <h2>everRecipes</h2>
          <img className="apps" src={ever} alt="image of ever recipes app" />
        </div>
        <span>
          <a
            className="clicktoplay"
            href="https://mcodt1702.github.io/EverRecipes/"
            target="_blank"
          >
            Click Here To Find a Recipe
          </a>
        </span>
        <p className="appdescription">
          The puspose of the app is to provide the user with recipies and a list
          of ingredients
          <br />
          acoording to three different options. The user can choose to search
          recipes by <br />
          one or more ingredients, serch by cuisine eg, Mexican, French etc. The
          user can also search for individual ingrediens at his local store.
        </p>
        <p className="appdescription">
          Technology: HTML, CSS, JavaScript and jQuery.
        </p>
        <p className="appdescription">
          Github Repo:
          <a href="https://github.com/mcodt1702/EverRecipes" target="_blank">
            https://github.com/mcodt1702/EverRecipes
          </a>
        </p>
        <hr />
        <br />
        <br />
        <div className="quizzapp">
          <h2>Coronavirus QuizzApp</h2>
          <img className="apps" src={quiz} alt="image of quizzapp game" />
        </div>
        <span>
          <a
            className="clicktoplay"
            href="https://thinkful-ei-macaw.github.io/QuizAppMarcoHannah"
            target="_blank"
          >
            Click Here To Play
          </a>
        </span>
        <p className="appdescription">
          The purpose of this Quizz is to create a better understanding on how
          the Coronavirus gets transmited
        </p>
        <p className="appdescription">
          Technology: javaScript, jQuary, CSS, HTML.
        </p>
        <p className="appdescription">
          Github Repo:
          <a
            href="https://github.com/thinkful-ei-macaw/QuizAppMarcoHannah"
            target="_blank"
          >
            https://github.com/thinkful-ei-macaw/QuizAppMarcoHannah
          </a>
        </p>
        <hr />
        <br />
        <br />
        <div className="booksmark">
          <h2>Bookmark App</h2>
          <img className="apps" src={bookmark} alt="image of bookmarks game" />
        </div>
        <span>
          <a
            className="clicktoplay"
            href="https://thinkful-ei-macaw.github.io/Marco-bookmarks-app/"
            target="_blank"
          >
            Click Here To Play
          </a>
        </span>
        <p className="appdescription">
          This App is designed to store and rate bookmarks
        </p>
        <p className="appdescription">
          Technology: javaScript, jQuary, CSS, HTML, Asynchronous web apps
        </p>
        <p className="appdescription">
          Github Repo:
          <a href="https://github.com/mcodt1702/bookmarks" target="_blank">
            https://github.com/mcodt1702/bookmarks
          </a>
          "
        </p>
      </div>
    );
  }
}
