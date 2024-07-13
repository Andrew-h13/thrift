import React from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";

function App() {
  return (
    <>
      <div className="sidebar">
        <div className="hInfo">
          <div className="logo">
            <label>ThriftSea</label>
          </div>
          <div className="user">
            <button className="logButton">Sign Up</button>
            <button className="logButton">Login</button>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="welcome-banner">Welcome to the Banner</div>
        <div className="cat-container">
          <div className="windows-container">
            <div className="window-l">Left Window</div>
            <div className="window-m">Middle Window</div>
            <div className="window-r">Right Window</div>
            <div className="window-m">Middle Window</div>
            <div className="window-r">Right Window</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
