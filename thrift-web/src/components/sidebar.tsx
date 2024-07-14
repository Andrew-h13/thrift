import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const sidebar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/");
  };
  return (
    <div className="sidebar">
      <div className="hInfo">
        <div className="logo">
          <button className="web-name" onClick={handleGoToHome}>
            ThriftSea
          </button>
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
