import React, { useState, useEffect } from 'react';

const SimulatedAPI = () => {
  const [data, setData] = useState(null); // Create state called data [cite: 203]

  useEffect(() => {
    // Simulate fetching data with 2 seconds delay [cite: 206]
    const timer = setTimeout(() => {
      setData("Sample Data Received!"); // Update state after delay [cite: 207]
    }, 2000);

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div>
      <h2>Activity 3: Simulated API</h2>
      {/* Show "Loading..." until data appears [cite: 208] */}
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};