import React, { useState } from 'react';
import '../styles/profile.css';
import Sidebar from '../components/sidebar';
import EditProfileForm from './profile/EditProfileForm';
import ProfileDetails from './profile/ProfileDetails';

const ProfilePage: React.FC = () => {
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode(prevMode => !prevMode);
  };

  return (
    <>
    <Sidebar />
    <div className='content'>
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Page</h1>
        <button className="edit-button" onClick={toggleEditMode}>
          {editMode ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>
      {editMode ? <EditProfileForm onCancel={toggleEditMode} /> : <ProfileDetails />}
    </div>
    </div>

    </>
  );
};

export default ProfilePage;
