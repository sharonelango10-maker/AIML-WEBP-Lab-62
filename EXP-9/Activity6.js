import React, { useState } from 'react';

const DynamicList = () => {
  // Create an array of objects manually and store in state [cite: 228, 229]
  const [users] = useState([
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "SFIT Student", email: "student@sfit.ac.in" }
  ]);

  return (
    <div>
      <h2>Activity 6: Dynamic List</h2>
      <ul>
        {/* Use map() to display Name and Email [cite: 230, 232, 233] */}
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};