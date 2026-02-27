import React, { useState } from 'react';

function Activity3() {
  const [text, setText] = useState("");

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Activity 3: Controlled Input</h3>
      <input 
        type="text" 
        placeholder="Enter text..." 
        onChange={(e) => setText(e.target.value)} 
      />
      <p>You entered: {text}</p>
    </div>
  );
}

export default Activity3;