import React from "react";
import "./style.css";

function NavSidebar() {

  return (
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="list-group list-group-flush">
        <a href="/" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Home
        </a>
        <a href="/planner" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Planner
        </a>
        <a href="/blog" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Adventures
        </a>
        <a href="/gallery" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Gallery
        </a>
        <a href="/preferences" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Preferences
        </a>
      </div>
    </div>
  );
}

export default NavSidebar;
