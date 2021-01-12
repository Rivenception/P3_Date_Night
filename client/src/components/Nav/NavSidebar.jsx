import React from "react";
import "./style.css";

function NavSidebar() {
  return (
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="sidebar-heading fancy">Date Night </div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-dark">
          Home
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-dark">
          Planner
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-dark">
          Adventures
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-dark">
          Gallery
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-dark">
          Preferences
        </a>
      </div>
    </div>
  );
}

export default NavSidebar;
