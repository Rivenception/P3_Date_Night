import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
    class Home extends Component {
    
        state = {
        events: [],
        eventsSearch: ""
        };

        render() {
            return (
                <div>
                    <Nav />
                    <Jumbotron />
                    <h2>Home Page</h2>
                </div>
            );
        }
    }
export default Home;