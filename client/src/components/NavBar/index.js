import React from "react";

function NavBar (){
<Navbar>
  <Navbar.Brand href="#home">Date Night</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="navbar navbar-expand-lg navbar-primary bg-light justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">User</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>

}

// Might be a good idea for the NavBar for Profile Page to have a link that says user login name// 
// source for more info: https://react-bootstrap.github.io/components/navbar/ // 

export default NavBar; 