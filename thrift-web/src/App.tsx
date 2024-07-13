import React from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";

function App() {
  return (
    <>
      <div className="header">
        <div className="hInfo">
          <div className="logo">
            <label> ThriftSea </label>
          </div>
          <div className="user">
            <button className="logButton"> Sign Up</button>
            <button className="logButton">Login</button>
            <label className="username">User placeholder</label>
            <button className="dropCircle">
              <i className="bx bxs-tree-alt dropIcon"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="welcome-banner"></div>

      <div className="main-container">
        <div className="windows-container">
          <div className="window-l"></div>
          <div className="window-m"></div>
          <div className="window-r"></div>
        </div>
      </div>
    </>
  );
}

export default App;
