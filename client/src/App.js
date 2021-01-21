import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getDates } from "./utils/api";
import Home from "./pages/Home.jsx";
import Blog from "./pages/Blog.jsx";
import Preferences from "./pages/Preferences";
import Planner from "./pages/Planner";
import Gallery from "./pages/Gallery";
import Nav from "./components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Foot from "./components/Foot/index";
import { Wrapper, Main, Sidebar } from "./components/Wrappers/index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [dates, setDates] = useState([]);

  useEffect(
    () => {
        getDates()
        .then(res => {
          console.log(res.data)
          setDates(res.data)
        }
        )
        .catch(err => console.log(err));
    }, [])

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
          <Route exact path="/blog">
            <Blog />
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
