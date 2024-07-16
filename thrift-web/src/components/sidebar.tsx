import React, { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

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

  const handleGoToAbout = () => {
    navigate("/About");
    handleButtonClick(8);
  };

  const handleGoToCart = () => {
    navigate("/Cart");
    handleButtonClick(6);
  };

  const handleGoToContact = () => {
    navigate("/Contact");
    handleButtonClick(9);
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
            <button className="web-name" onClick={handleGoToHome}>
              ThriftSea
            </button>
          </div>
          <div className="buttonBar-container">
            <button
              className={`logButton ${activeButton === 0 ? "active" : ""}`}
              onClick={handleGoToHome}
            >
              Home
            </button>
            <button
              className={`logButton ${activeButton === 1 ? "active" : ""}`}
            >
              Search
            </button>
            <button
              className={`logButton ${activeButton === 2 ? "active" : ""}`}
              onClick={handleGoToSignUp}
            >
              Sign Up
            </button>
            <button
              className={`logButton ${activeButton === 3 ? "active" : ""}`}
              onClick={handleGoToLogin}
            >
              Login
            </button>
            <button
              className={`logButton ${activeButton === 4 ? "active" : ""}`}
              onClick={handleGoToAccount}
            >
              Account
            </button>
            <button
              className={`logButton ${activeButton === 5 ? "active" : ""}`}
              onClick={handleGoToLogOut}
            >
              Log Out
            </button>
            <button
              className={`logButton ${activeButton === 6 ? "active" : ""}`}
              onClick={handleGoToCart}
            >
              Cart
            </button>
            <button
              className={`logButton ${activeButton === 7 ? "active" : ""}`}
              onClick={handleGoToCategories}
            >
              Categories
            </button>
            <button
              className={`logButton ${activeButton === 8 ? "active" : ""}`}
              onClick={handleGoToAbout}
            >
              About Us
            </button>
            <button
              className={`logButton ${activeButton === 9 ? "active" : ""}`}
              onClick={handleGoToContact}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
