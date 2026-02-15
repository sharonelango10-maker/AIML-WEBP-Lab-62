import React from 'react';

// Hello Component (Exercise 1)
export const Hello = () => {
  return <h1>Hello, Welcome to React!</h1>;
};

// Student Component (Exercise 2)
export const Student = (props) => {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <p>Name: {props.name}</p>
      <p>Class: {props.className}</p> 
    </div>
  );
};