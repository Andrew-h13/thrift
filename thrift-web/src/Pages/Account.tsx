import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import myapp from "../api"; // Import the Axios instance you configured
import { ACCESS_TOKEN } from "../constants";
import "../styles/profile.css"; // Assuming you have some CSS styles
import Sidebar from "../components/sidebar";

const Account: React.FC = () => {
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await myapp.get("/profile/");
        setUsername(response.data.username);
        setNewUsername(response.data.username);
      } catch (error) {
        console.error("Error fetching profile", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      await myapp.put("/profile/update/", { username: newUsername });
      setUsername(newUsername);
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    navigate("/login");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Sidebar />
      <div className="profile-container">
        <div className="profile-header">
          <h1>Account</h1>
          <button
            className="edit-button"
            onClick={() => setEditMode((prevMode) => !prevMode)}
          >
            {editMode ? "Cancel" : "Edit Profile"}
          </button>
        </div>
        <div className="profile-details-container">
          <div className="user-info-container">
            {editMode ? (
              <div className="edit-profile-form">
                <div className="form-group">
                  <label htmlFor="username">New Username</label>
                  <input
                    id="username"
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter new username"
                  />
                </div>
                <div className="form-actions">
                  <button
                    className="save-button"
                    onClick={handleUpdate}
                    disabled={loading}
                  >
                    Save
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => setEditMode(false)}
                    disabled={loading}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="user-info-details">
                <h2 className="user-info-username">{username}</h2>
              </div>
            )}
          </div>
        </div>
        <button className="edit-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Account;
