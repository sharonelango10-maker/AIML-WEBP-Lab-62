import React from 'react';

// Use { } to destructure props directly in the arguments
const ProfileCard = ({ name, role, bio }) => {
  return (
    <div style={{ border: '2px solid #646cff', padding: '15px', borderRadius: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <h4 style={{ color: '#646cff' }}>{role}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default ProfileCard;