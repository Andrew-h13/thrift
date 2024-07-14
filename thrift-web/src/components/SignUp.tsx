import React, { useState } from "react";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Signed Up");
  };

  const handleGoToLogin = () => {
    navigate("/Login");
  };

  return (
    <>
      <Sidebar />
      <div className="login-container">
        <div className="container">
          <form onSubmit={handleLogin}>
            <h1>Register</h1>

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
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button className="navigation-button" type="submit">
              Login
            </button>
          </form>
          <div className="spacer"></div>
          <div className="sign-container">
            <button className="sign-buttons" onClick={handleGoToLogin}>
              Already have an account? Click here to Login!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
