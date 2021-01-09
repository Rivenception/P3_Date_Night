import React from "react";

function Jumbotron({ children }) {
  return (
    <div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", }} className="jumbotron">
        <h1> Date Night </h1>
				<p>Search for your next date !</p>
    </div>
  );
}

export default Jumbotron;