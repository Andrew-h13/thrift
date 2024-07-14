import React from "react";
import "../App.css";

const sidebar = () => {
  return (
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
  );
};

export default sidebar;
