import React, { useState } from 'react';

function Activity6() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleValidation = () => {
    if (email === "") {
      setMessage("Error: Email cannot be empty.");
    } else if (!email.includes("@")) {
      setMessage("Error: Email must contain '@'.");
    } else {
      setMessage("Success: Email is valid!");
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Activity 6: Email Validation</h3>
      <input 
        type="text" 
        placeholder="Enter email" 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleValidation}>Validate</button>
      <p>{message}</p>
    </div>
  );
}

export default Activity6;