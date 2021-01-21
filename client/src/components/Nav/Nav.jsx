import React from "react";
import LoginBtn from "../Buttons/login";
import Signup from "../Buttons/signup";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fancy" href="/">
          Date Night
        </a>
        <Signup />
        <LoginBtn />
        <button
          className="navbar-toggler ml-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
