import React, { useState } from 'react';

function Activity4() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Activity 4: Multiple States</h3>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
      <p>Name: {name} | City: {city}</p>
    </div>
  );
}

export default Activity4;