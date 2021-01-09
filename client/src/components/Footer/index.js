
import React from "react";
import { Link } from "react-router-dom";

    function Footer() {
        return (
            
        <nav className="navbar navbar-expand-lg navbar-primary bg-light" sticky="bottom" >
            <h1 className="navbar-brand" href="/"> Date Night  </h1>
            <button variant="dark"> Saved </button>
            <button variant="dark bg-large"> Profile </button>
        </nav>
  );
}

export default Footer;