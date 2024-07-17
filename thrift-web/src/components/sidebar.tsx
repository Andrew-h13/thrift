import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";


import logo from "../pictures/thriftsea-high-resolution-logo-white-transparent.png";

const Sidebar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();


  function Logout() {
    localStorage.clear();
    return navigate("/Login");
  }

  const handleGoToHome = () => {
    navigate("/");
    handleButtonClick(0);
  };
  const handleGoToLogin = () => {
    navigate("/Login");
    handleButtonClick(3);
  };
  const handleGoToSignUp = () => {
    navigate("/SignUp");
    handleButtonClick(2);
  };

  const handleGoToAccount = () => {
    navigate("/Account");
    handleButtonClick(4);
  };


  const handleGoToCategories = () => {
    navigate("/Categories");
    handleButtonClick(7);
  };

  const handleGoToLogOut = () => {
    Logout();
  };

  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleButtonClick = (buttonId: number | null) => {
    setActiveButton(buttonId);
    localStorage.setItem("activeButton", String(buttonId));
  };

  useEffect(() => {
    const storedActiveButton = localStorage.getItem("activeButton");
    if (storedActiveButton) {
      setActiveButton(Number(storedActiveButton));
    }
  }, []);

  return (
    <div className="sidebar">
      <div className="hInfo">
        <div className="user">
          <div className="logo">
            <img
              src={logo}
              alt="Logo"
              className="web-logo"
              onClick={handleGoToHome}
            />
          </div>
          <div className="buttonBar-container">
            <button
              className={`logButton ${activeButton === 0 ? "active" : ""}`}
              onClick={handleGoToHome}
            >
              <i className="bx bx-home-alt icon-group"></i>
              Home
            </button>
            <button
              className={`logButton ${activeButton === 1 ? "active" : ""}`}
            >
              <i className="bx bx-search icon-group"></i>
              Search
            </button>
            <button
              className={`logButton ${activeButton === 7 ? "active" : ""}`}
              onClick={handleGoToCategories}
            >
              <i className="bx bx-category icon-group"></i>
              Categories
            </button>
            <button
              className={`logButton ${activeButton === 4 ? "active" : ""}`}
              onClick={handleGoToAccount}
            >
              <i className="bx bx-user icon-group"></i>
              Account
            </button>
            <button
              className={`logButton ${activeButton === 2 ? "active" : ""}`}
              onClick={handleGoToSignUp}
            >
              <i className="bx bx-user-plus icon-group"></i>
              Sign Up
            </button>
            <button
              className={`logButton ${activeButton === 3 ? "active" : ""}`}
              onClick={handleGoToLogin}
            >
              <i className="bx bx-log-in icon-group"></i>
              Login
            </button>
  
            <button
              className={`logButton ${activeButton === 5 ? "active" : ""}`}
              onClick={handleGoToLogOut}
            >
              <i className="bx bx-log-out icon-group"></i>
              Log Out
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
