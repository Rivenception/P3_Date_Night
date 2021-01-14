import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  
  state = {
    email: "",
    userName: "",
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

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.userName) {
      alert("Fill out your email and username please!");
    } else if (this.state.password.length < 4) {
      alert(
        `Choose a more secure password ${this.state.userName}`
      );
    } else {
      alert(`Hello ${this.state.userName}`);
    }

    this.setState({
      email: "",
      userName: "",
      password: ""
    });
  };

  render() {
    
    return (
    
      <div className="col-md-6 offset-md-3">
        <br/>
        <p className="fancy">
          Welcome 
          <br/>
          {this.state.userName}
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
            value={this.state.userName}
            name="userName"
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
          <button className="btn btn-outline-light bg-dark" onClick={this.handleFormSubmit}>Enter</button>
        </form>
      </div>
    );
  }
}

export default Form;