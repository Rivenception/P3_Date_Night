import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/Nav";
import Home from "./pages/Home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
  
//     state = {
//     events: [],
//     eventsSearch: ""
//   };

//   render() {
//     return (
     
//     <div>
//       <Nav />
      
             
//     </div>
//   );
//   }
// }
// export default App;

  function App() {
	  return (
		  <Router>
			    <Switch>
				      <Route exact path="/" component={Home} />
				    
			    </Switch>
		  </Router>
	  );
  }

export default App;


