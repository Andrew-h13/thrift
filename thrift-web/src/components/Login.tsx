import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("loggedIN");
  };

  const handleGoToSignUp = () => {
    navigate("/SignUp");
  };

  return (
    <>
      <Sidebar />
      <div className="login-container">
        <div className="container">
          <form onSubmit={handleLogin}>
            <h1>Login</h1>

            <input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="navigation-button" type="submit">
              Login
            </button>
          </form>
          <div className="spacer"></div>
          <div className="sign-container">
            <button className="sign-buttons" onClick={handleGoToSignUp}>
              Don't have an account? Click here to Sign Up!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
