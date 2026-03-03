import React, { useState, useEffect } from 'react';

const DependencyDemo = () => {
  const [count, setCount] = useState(0);

  // Activity 1: Print message when component loads [cite: 186]
  useEffect(() => {
    console.log("Component Loaded!");
  }, []); // Empty array ensures this runs only once [cite: 196]

  // Activity 2: Logging based on dependency array behavior [cite: 190, 193]
  useEffect(() => {
    console.log("Counter Updated (Dependency: [count])");
  }, [count]); // Runs whenever 'count' changes [cite: 198]

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h2>Activity 1 & 2: useEffect & Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </div>
  );
};

export default DependencyDemo;