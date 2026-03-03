import React from 'react';

const AsyncFetchPractice = () => {
  // Activity 5: Create an async function [cite: 222]
  const handleFetch = async () => {
    try {
      // Use async/await instead of .then() [cite: 223]
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const jsonData = await response.json();
      
      // Activity 4 & 5: Print response in console [cite: 219, 224]
      console.log("Fetched Data:", jsonData);
    } catch (error) {
      // Add try-catch for error handling [cite: 225]
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h2>Activity 4 & 5: Manual Fetch</h2>
      {/* Button labeled "Fetch Data" [cite: 215] */}
      <button onClick={handleFetch}>Fetch Data</button>
    </div>
  );
};