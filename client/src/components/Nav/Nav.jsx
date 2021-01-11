import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="btn btn-outline-light" type="submit">Sign Up</button>
        <button className="btn btn-outline-light" type="submit">Login</button>
        <button
          className="navbar-toggler ml-auto"
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
