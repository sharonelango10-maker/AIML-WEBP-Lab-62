import React from 'react';

const Button = ({ text }) => {
  return (
    <button style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}>
      {text}
    </button>
  );
};

export default Button;