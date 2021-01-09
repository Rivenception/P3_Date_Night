import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <button class="btn btn-outline-light" type="submit">Sign Up</button>
        <button class="btn btn-outline-light" type="submit">Login</button>
        <button
          class="navbar-toggler ml-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
