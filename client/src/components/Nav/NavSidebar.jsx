import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

function NavSidebar() {

  return (
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="list-group list-group-flush">
        <Link to="/" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Home
        </Link>
        <Link to="/planner" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Planner
        </Link>
        <Link to="/blog" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Adventures
        </Link>
        <Link to="/gallery" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Gallery
        </Link>
        <Link to="/preferences" className="list-group-item list-group-item-action bg-dark fancy" style={{color: "whitesmoke"}}>
          Preferences
        </Link>
      </div>
    </div>
  );
}

export default NavSidebar;
