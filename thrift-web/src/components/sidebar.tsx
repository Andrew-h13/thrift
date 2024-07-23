import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

import logo from "../pictures/thriftsea-high-resolution-logo-white-transparent.png";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeButton, setActiveButton] = useState<number | null>(null);

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    setIsLoggedIn(!!accessToken && !!refreshToken);

    const storedActiveButton = localStorage.getItem("activeButton");
    if (storedActiveButton) {
      setActiveButton(Number(storedActiveButton));
    }
  }, []);

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
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    setIsLoggedIn(false);
    navigate("/Login");
  };

  const handleButtonClick = (buttonId: number | null) => {
    setActiveButton(buttonId);
    localStorage.setItem("activeButton", String(buttonId));
  };

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
              className={`logButton ${activeButton === 7 ? "active" : ""}`}
              onClick={handleGoToCategories}
            >
              <i className="bx bx-category icon-group"></i>
              Inventory
            </button>
            {isLoggedIn && (
              <button
                className={`logButton ${activeButton === 4 ? "active" : ""}`}
                onClick={handleGoToAccount}
              >
                <i className="bx bx-user icon-group"></i>
                Account
              </button>
            )}
            {!isLoggedIn && (
              <>
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
              </>
            )}
            {isLoggedIn && (
              <button
                className={`logButton ${activeButton === 5 ? "active" : ""}`}
                onClick={handleGoToLogOut}
              >
                <i className="bx bx-log-out icon-group"></i>
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
