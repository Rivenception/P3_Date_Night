import React from "./node_modules/react";
import "./style.css"


function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid d-flex align-items-center">
            <div className="container text-center">
                {children}
            </div>
        </div>
    );
}

export default Jumbotron;