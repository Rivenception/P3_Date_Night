import {Link, BrowserRouter as Router} from 'react-router-dom';

function Login() {
  return (
    <Router>

      <Link to="/login"><button className="btn btn-outline-light ml-1" type="submit">
        Login
      </button></Link>
    </Router>

  );
}

export default Login;
