import React from "react";
import "./style.css";

function NavSidebar() {

  return (
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="list-group list-group-flush">
        <a href="/" class="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Home
        </a>
        <a href="/planner" class="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Planner
        </a>
        <a href="/profile" class="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Adventures
        </a>
        <a href="/gallery" class="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Gallery
        </a>
        <a href="/preferences" class="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Preferences
        </a>
      </div>
    </div>
  );
}

export default NavSidebar;
