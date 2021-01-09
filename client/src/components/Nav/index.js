import React from "react";
import { Link } from "react-router-dom";

    function Nav() {
        return (
            
        <nav className="navbar navbar-expand-lg navbar-primary bg-light" fixed="top" >
            <h1 className="navbar-brand" href="/"> Date Night </h1>
            <button> <Link style={styles.link} to="/profile"> Profile </Link> </button>
            <button> <Link style={styles.link} to="/"> Home </Link> </button>
        </nav>
  );
}

export default Nav;

    const styles = {
        link: {
            color: "black",
            padding: "20px",
        }
    }