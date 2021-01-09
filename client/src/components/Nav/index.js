import React from "react";
import NavToggle from "./Toggle";
import Navbar from "./Nav";

function Nav() {
  return (
    <div>
    <NavToggle/>
    <Navbar/>
    </div>
    // <nav className="navbar navbar-expand-lg navbar-primary bg-light" fixed="top" >
    //     <h1 className="navbar-brand" href="/"> Date Night </h1>
    //     <button> <a style={styles.link} href="/profile"> Profile </a> </button>
    //     <button> <a style={styles.link} href="/"> Home </a> </button>
    // </nav>
  );
}

export default Nav;

const styles = {
  link: {
    color: "black",
    padding: "20px",
  },
};
