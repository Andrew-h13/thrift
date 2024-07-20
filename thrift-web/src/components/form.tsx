import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";
import myapp from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/form.css";

interface Components {
  route: string;
  method: "login" | "register";
}

const Form: React.FC<Components> = ({ route, method }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await myapp.post(route, {
        // Use the route prop here
        username,
        password,
      });
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Sidebar />
      <div className="login-container">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h1
              style={{
                fontSize: "2rem",
                marginBottom: "1rem",
                color: "#000",
                fontWeight: "bolder",
              }}
            >
              {method === "login" ? "Login" : "Register"}
            </h1>
            <input
              className="form-input"
              type="text" // Changed to "text" as "username" is not a valid type
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />

            <button
              className="navigation-button"
              type="submit"
              disabled={loading}
            >
              {method === "login" ? "Login" : "SignUp"}
            </button>
            <div className="spacer"></div>
            <div className="sign-container">
              <button
                className="sign-buttons"
                onClick={() =>
                  navigate(method === "login" ? "/signup" : "/login")
                }
              >
                {method === "login"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
