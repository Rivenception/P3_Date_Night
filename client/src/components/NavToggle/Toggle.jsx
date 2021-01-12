// Link to sidebar app I tried to emulate for app

// https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/index.html
// https://startbootstrap.com/previews/simple-sidebar

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
    </div>
  );
}

export default NavToggle;