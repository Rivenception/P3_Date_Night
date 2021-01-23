import React from "react";
import "./style.css";
import {Link} from "react-router-dom";

function NavSidebar() {

  return (
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="list-group list-group-flush">
        <a href="/" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Home
        </a>
        <Link to="/planner" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Planner
        </Link>
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
