import React from 'react';

// Exercise 6: One-way data flow
export const Message = ({ text }) => <p>Advice: {text}</p>;

// Exercise 7: Combined Profile Card
export const ProfileCard = ({ name, age, favSubject }) => {
  return (
    <div style={{ backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
      <p>Favorite Subject: {favSubject}</p>
    </div>
  );
};