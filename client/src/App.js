import React, { Component } from "react";

import Nav from "./components/Nav";
import Foot from "./components/Foot";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
    state = {
    events: [],
    eventsSearch: ""
  };

  render() {
    return (
     
    <div>
      <Nav />
      
             
    </div>
  );
  }
}
export default App;

  // function App() {
	//   return (
	// 	  <Router>
	// 		  <Nav />
	// 		    <Switch>
	// 			    <Route exact path="/" component={Home} />
	// 			    <Route exact path="/search" component={Search} />
	// 			    <Route exact path="/profile" component={Profile} />
	// 		    </Switch>
	// 	  </Router>
	//   );
  // }

// export default App;


