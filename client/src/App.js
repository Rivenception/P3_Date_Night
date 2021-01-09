import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Nav from "./components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main/Main";
import Foot from "./components/Foot/index";

function App() {
  return (
    <div className="App">
      <Nav />
      <Foot />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
