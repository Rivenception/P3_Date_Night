import React, { Component } from "react";
import Nav from "../components/Nav";

    class Profile extends Component {
    
        state = {
        events: [],
        eventsSearch: ""
        };

        render() {
            return (
                <div>
                    <Nav />
                    <h2>Profile Page</h2>
                </div>
            );
        }
    }
export default Profile;