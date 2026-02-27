import React, { useState } from 'react';

function Activity1() {
  const [message, setMessage] = useState("Hello Student");

  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h2>Activity 1</h2>
      <p>{message}</p>
      <button onClick={() => setMessage("Welcome to React State")}>
        Change Message
      </button>
    </div>
  );
}

export default Activity1; // This line is crucial!