import React, { useState } from 'react';

function Activity5() {
  const [user, setUser] = useState({ name: "", city: "" });

  const updateField = (e) => {
    const { name, value } = e.target;
    // ...user copies the old object, [name]: value updates only the changed field
    setUser({ ...user, [name]: value });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>Activity 5: State Object</h3>
      <input name="name" placeholder="Name" onChange={updateField} />
      <input name="city" placeholder="City" onChange={updateField} />
      <p>Output: {user.name} lives in {user.city}</p>
    </div>
  );
}

export default Activity5;