import React, { Component } from "react";
import Nav from "../components/Nav";

    class Home extends Component {
    
        state = {
        events: [],
        eventsSearch: ""
        };

        render() {
            return (
                <div>
                    <Nav />
                    <h2>Home Page</h2>
                </div>
            );
        }
    }
export default Home;