import React, { Component } from "react";
import "./style.css";
import API from '../../utils/API'
// import { Redirect } from 'react-router-dom'
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

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.username) {
      alert("Select email and username please!");
    } else if (this.state.password.length < 4) {
      alert(
        `Choose a more secure password ${this.state.username}`
      );
    } else {
      // alert(`Hello ${this.state.username}`);
      API.registerUser(this.state)
      .then(res => console.log(res))
      console.log('sent', this.state)
      // return(<Redirect to="/" />)
    }

    this.setState({
      email: "",
      username: "",
      password: ""
    });
  };

  render() {
    
    return (
    
      <div className="col-md-6 offset-md-3">
        <p className="fancy">
          <br/>
          Welcome
          <br/>
          {this.state.username}
        </p>
        
        <h3 className="fancy"> Please Signup </h3>
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
          <button className="btn btn-outline-light bg-dark" onClick={this.handleFormSubmit}>Enter</button>
        </form>
      </div>
    );
  }
}

export default Form;