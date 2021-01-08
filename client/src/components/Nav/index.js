import React from "react";
import { Link } from "react-router-dom";

    function Nav() {
        return (
            
        <nav className="navbar navbar-expand-lg navbar-primary bg-light" fixed="top" >
            <h1 className="navbar-brand" href="/"> Date Night </h1>
            <button variant="dark"> Saved </button>
            <button variant="dark bg-large"> Profile </button>
        </nav>
  );
}

export default Nav;

    const styles = {
        link: {
            color: "white",
            padding: "20px",
        }
    }