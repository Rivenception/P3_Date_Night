// Link to sidebar app I tried to emulate for app

// https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/index.html
// https://startbootstrap.com/previews/simple-sidebar

import React from "react";
import "./style.css";

function NavToggle() {
  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-dark" id="sidebar-wrapper">
        <div className="sidebar-heading fancy">Date Night </div>
        <div className="list-group list-group-flush">
          <a href="/blog" className="list-group-item list-group-item-action bg-dark">
            Blog
          </a>
          <a href="preferences" className="list-group-item list-group-item-action bg-dark">
            Preferences
          </a>
        </div>
      </div>

      <div id="page-content-wrapper">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="btn btn-primary" id="menu-toggle">
            Toggle Menu
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavToggle;