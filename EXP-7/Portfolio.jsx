
import React from 'react';
import ProfileCard from './ProfileCard'; // Double check this path!

const Portfolio = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>My Professional Portfolio</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProfileCard 
          name="Sharon Elango" 
          role="React Developer" 
          bio="Learning to build dynamic web applications with props." 
        />
        <ProfileCard 
          name="AI Assistant" 
          role="Collaborator" 
          bio="Helping debug React components one step at a time." 
        />
      </div>
    </div>
  );
};

export default Portfolio;