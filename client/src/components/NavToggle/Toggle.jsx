import React from "react";
import "./style.css";

function NavToggle() {
  return (
    <div class="d-flex" id="wrapper">
      <div class="bg-dark" id="sidebar-wrapper">
        <div class="sidebar-heading fancy">Date Night </div>
        <div class="list-group list-group-flush">
          <a href="#" class="list-group-item list-group-item-action bg-dark">
            Dashboard
          </a>
          <a href="#" class="list-group-item list-group-item-action bg-dark">
            Shortcuts
          </a>
        </div>
      </div>

      <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <button class="btn btn-primary" id="menu-toggle">
            Toggle Menu
          </button>
        </nav>
      </div>
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
  );
}

export default NavToggle;