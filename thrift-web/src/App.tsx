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
            {/* <button className="logButton">Sign Up</button>
            <button className="logButton">Login</button> */}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="welcome-banner">
          <h1 className="header"> Welcome to ThriftSea</h1>
          <p className="description">
            At ThriftSea, we dive deep to bring you treasures without sinking
            your budget. Where thrifty meets the sea of endless possibilities!
          </p>
          <div className="button-container">
            <button className="Join"> Join For Free</button>
            <button className="Sign"> Sign In</button>
          </div>
        </div>
        <div className="spacer1"></div>
        <div className="cat-container">
          <div className="windows-container">
            <div className="window-l">
              <div className="picture-window"></div>
              <div className="pic-spacer"></div>
              <h1 className="cat-name">Electronics</h1>
            </div>
            <div className="window-m">
              <div className="picture-window"></div>
              <div className="pic-spacer"></div>

              <h1 className="cat-name">Clothing</h1>
            </div>
            <div className="window-r">
              <div className="picture-window"></div>
              <div className="pic-spacer"></div>

              <h1 className="cat-name">Toys</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
