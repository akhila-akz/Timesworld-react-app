import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Login";

import UserData from "./Containers/CountryConatiner/index";
import "./App.css";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <div>
            <switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/login" component={Login} />

              <Route exact path="/home" component={UserData} />
            </switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
