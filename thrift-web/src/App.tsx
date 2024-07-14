import React from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Sidebar from "./components/sidebar";

function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="welcome-banner">
          <h1 className="header"> Welcome to ThriftSea</h1>
          <p className="description">
            At ThriftSea, we dive deep to bring you treasures without sinking
            your budget. Where thrifty meets the sea of endless possibilities!
          </p>
          <div className="button-container">
            <button className="Join" onClick={() => navigate("/SignUp")}>
              {" "}
              Join For Free
            </button>
            <button className="Sign" onClick={() => navigate("/Login")}>
              Sign In
            </button>
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
