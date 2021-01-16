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
//import NavSidebar from "./components/Nav/NavSidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <Wrapper/>
	  <Sidebar/>
	  <Main/>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
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
      <Foot />
    </div>
  );
}

export default App;
