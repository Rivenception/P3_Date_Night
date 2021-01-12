import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Preferences from "./pages/Preferences";
import Planner from "./pages/Planner";
import Gallery from "./pages/Gallery";
import Nav from "./components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foot from "./components/Foot/index";
import { Wrapper, Main, Sidebar } from "./components/Wrappers/index";

function App() {
  return (
    <div className="App">
      {/* <Wrapper>
        <Sidebar></Sidebar>
        <Main> */}
          <Nav />
          <Foot />
        {/* </Main>
      </Wrapper> */}

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/preferences">
            <Preferences />
          </Route>
          <Route exact path="/planner">
            <Planner />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
