import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header/Header"
import SpeechToText from "./components/SpeechToText";
import Pronunciation from "./components/Pronunciation";
import PronunciationsList from "./components/PronunciationsList";

function App() {
  return (
    <Router>
      <Header/>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
        <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/speech"} className="nav-link">
              Speech to Text
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/pronunciations"]} component={PronunciationsList} />
          <Route exact path="/speech" component={SpeechToText} />
          <Route path="/pronunciations/:id" component={Pronunciation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
