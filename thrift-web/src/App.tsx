import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="hInfo">
          <div className="logo">
            <label> Website Logo</label>
          </div>
          <div className="user">
            <button className="logButton">Login</button>
            <button className="logButton"> Sign Up</button>
            <label className="username">User placeholder</label>
            <button className="dropCircle"> circle</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
