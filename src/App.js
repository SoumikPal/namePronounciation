import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header/Header"
import AddPronunciation from "./components/AddPronunciation";
import Pronunciation from "./components/Pronunciation";
import PronunciationsList from "./components/PronunciationsList";

function App() {
  return (
    <Router>
      {/* <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/pronunciations" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/pronunciations"} className="nav-link">
              Pronunciations
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav> */}
      <Header/>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/pronunciations"]} component={PronunciationsList} />
          <Route exact path="/add" component={AddPronunciation} />
          <Route path="/pronunciations/:id" component={Pronunciation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
