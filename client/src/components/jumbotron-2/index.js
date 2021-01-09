import React from "react";
import "./style.css"


function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
            <div className="container text-center">
                {children}
            <h1>Date Night</h1>
            </div>
        </div>
    );
}

export default Jumbotron;