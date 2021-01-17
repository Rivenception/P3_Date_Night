import React, { Component } from "react";
import { BrowserRouter as Redirect } from "react-router-dom";
import "./style.css";

class Form extends Component {
  
  state = {
    email: "",
    username: "",
    password: ""
  };

  handleInputChange = event => {
    
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    

    if (!this.state.email || !this.state.username) {
      alert("Fill out your email and username please!");
    } else if (this.state.password.length < 4) {
      alert(
        `Choose a more secure password ${this.state.username}`
      );
    } else {
      alert(`Hello ${this.state.username}`);
      <Redirect to="/profile" />
    }

    this.setState({
      email: "",
      userName: "",
      password: "",
      loggedIn: true
    });
  };

  render() {
    
    return (
    
      <div className="col-md-6 offset-md-3">
        <br/>
        <p className="fancy">
          Welcome 
          <br/>
          {this.state.username}
        </p>

        <h3 className="fancy"> Please Login </h3>
        
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <br></br>
          <button className="btn btn-outline-light bg-dark" onClick={this.handleLogin}>Enter</button>
        </form>
      </div>
    );
  }
}

export default Form;