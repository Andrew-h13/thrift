import React from "react";
import "./App.css";
import "boxicons/css/boxicons.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Sidebar from "./components/sidebar";

function HomePage() {
  const navigate = useNavigate();

  const AnimatedTypography = styled(Typography)`
    & {
      position: relative;
      font-size: 50px;
    }

    & span {
      color: #fff;
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      animation: waviy 2s infinite;
      animation-delay: calc(0.1s * var(--i));
    }

    @keyframes waviy {
      0%,
      40%,
      100% {
        transform: translateY(0);
      }
      20% {
        transform: translateY(-20px);
      }
    }
  `;

  interface Styles extends React.CSSProperties {
    "--i": number;
  }

  const string = "Welcome to ThriftSea";

  return (
    <>
      <Sidebar />
      <div className="content">
        <div className="welcome-banner">
          <div className="header">
            <Typography variant={"h1"} fontWeight={"bold"}>
              <AnimatedTypography>
                {string.split("").map((char, idx) => {
                  const styles: Styles = {
                    "--i": idx + 1,
                  };
                  return (
                    <span key={`${char}-${idx}`} style={styles}>
                      {char === " " ? "\u00A0" : char}
                    </span>
                  );
                })}
              </AnimatedTypography>
            </Typography>
          </div>

          <p className="description">
            At ThriftSea, we dive deep to bring you treasures without sinking
            your budget. Where thrifty meets the sea of endless possibilities!
          </p>
          <div className="button-container">
            <button className="Join" onClick={() => navigate("/SignUp")}>
              Join For Free
            </button>
            <button className="Sign" onClick={() => navigate("/Login")}>
              Sign In
            </button>
          </div>
        </div>
        <div className="spacer1"></div>
        <div className="cat-container">
          <div className="spacer"></div>
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
