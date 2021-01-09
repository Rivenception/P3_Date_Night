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
                </div>
            );
        }
    }
export default Home;