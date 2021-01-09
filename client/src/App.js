import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


  function App() {
	  return (
		  <Router>
			    <Switch>
				      <Route exact path="/" component={Home} />
              <Route exact path="/profile" component={Profile} />
			    </Switch>
		  </Router>
	  );
  }

export default App;


