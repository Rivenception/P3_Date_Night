import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom';

function LoginBtn() {
  return (
    <Router>
      <div className="w3-top zeed">
      <Link to="/login"><a href="#login" className="btn btn-outline-light ml-1">Login</a>
      </Link>
      </div>
    </Router>
    

  );
}

export default LoginBtn;
