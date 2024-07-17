import React from 'react';

const ProfileDetails = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    profileImage: 'https://via.placeholder.com/150',
  };

  return (
    <div className="profile-details">
      <div className="profile-image">
        <img src={user.profileImage} alt="Profile" />
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
