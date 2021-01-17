import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
import NavSidebar from "./components/Nav/NavSidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

  const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    return (
      <Route
        path={path}
        {...rest}
        render={props => {
          return loggedIn ? (
            <Comp {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  prevLocation: path,
                  error: "You need to login first!",
                },
              }}
            />
          );
        }}
      />
    );
  };

class App extends Component {
    state = {
      loggedIn: false,
    };
    
    render() {
     
  return (
    
    <div className="App">
      <Wrapper/>
	  <Sidebar/>
	  <Main/>
      <Nav />
      <div className="tabs">
         
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
          
          <ProtectedRoute exact path="/profile" loggedIn={this.state.loggedIn} component={Profile} />
          <ProtectedRoute exact path="/preferences" loggedIn={this.state.loggedIn} component={Preferences} />
          <ProtectedRoute exact path="/planner" loggedIn={this.state.loggedIn} component={Planner} />

        
          <Route exact path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </Router>
      </div>
      <Foot />
    </div>
  );
    }
}

export default App;
