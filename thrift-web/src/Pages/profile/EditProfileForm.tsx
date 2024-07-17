import React, { useState } from 'react';

interface EditProfileFormProps {
  onCancel: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ onCancel }) => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [bio, setBio] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, bio });
    onCancel(); 
  };

  return (
    <form className="edit-profile-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Bio:</label>
        <textarea
          value={bio}
          onChange={e => setBio(e.target.value)}
          rows={4}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="save-button">Save</button>
        <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditProfileForm;
