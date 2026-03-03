import React, { useState, useEffect } from 'react';

const UserList = () => {
  // Step 4: Initialize State [cite: 91, 98]
  const [users, setUsers] = useState([]);      // Data as empty array [cite: 100]
  const [loading, setLoading] = useState(true); // Loading as true [cite: 101]
  const [error, setError] = useState(null);    // Error as null [cite: 102]

  // Step 5: Implement useEffect Hook [cite: 103]
  useEffect(() => {
    // Create an async function inside useEffect [cite: 106]
    const fetchUsers = async () => {
      try {
        // Step 5.2: Call the API using Fetch and await response [cite: 108, 109]
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        // Step 5.3: Convert response to JSON [cite: 113]
        const data = await response.json();

        // Step 5.4: Update state with received data [cite: 114]
        setUsers(data);
      } catch (err) {
        // Step 7: Handle Errors [cite: 121, 122]
        setError(err.message);
      } finally {
        // Step 5.5: Set loading to false [cite: 112]
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures it runs only once on mount [cite: 54, 116]

  // Step 6: Handle Loading State [cite: 117, 119]
  if (loading) return <div className="loader">Loading users...</div>;

  // Step 7: Display error message in UI if it exists [cite: 122]
  if (error) return <div className="error-msg">Error: {error}</div>;

  // Step 8: Dynamically Display Data using map() [cite: 123, 124]
  return (
    <div className="user-grid">
      {users.map((user) => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3> {/* [cite: 130] */}
          <p><strong>Email:</strong> {user.email}</p> {/* [cite: 132] */}
          <p><strong>Company:</strong> {user.company.name}</p> {/* [cite: 133] */}
          <p><strong>Phone:</strong> {user.phone}</p> {/* [cite: 134] */}
        </div>
      ))}
    </div>
  );
};

export default UserList;