import React, { useState, useEffect } from 'react';

function App() {
  // Activity 2: State for counter
  const [count, setCount] = useState(0);

  // Activity 3: State for simulated data
  const [simulatedData, setSimulatedData] = useState(null);

  // Activities 4 & 5: State for real API data
  const [apiUser, setApiUser] = useState(null);

  // Activity 6: Manual array of objects in state
  const [manualUsers] = useState([
    { id: 1, name: "SFIT Student", email: "student@sfit.ac.in" },
    { id: 2, name: "AIML Dept", email: "aiml@sfit.ac.in" }
  ]);

  // Activity 1: useEffect running on mount
  useEffect(() => {
    console.log("Activity 1: Component loaded!");
  }, []); // Empty dependency array [cite: 54, 116]

  // Activity 2: useEffect running on count change
  useEffect(() => {
    console.log("Activity 2: Counter Updated to", count);
  }, [count]); // Dependency with count [cite: 55, 198]

  // Activity 3: Simulated API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setSimulatedData("Activity 3: Sample data fetched after 2 seconds!");
    }, 2000); // 2 seconds delay 
    return () => clearTimeout(timer);
  }, []);

  // Activities 4 & 5: Async function to fetch and update state
  const handleFetchData = async () => {
    try {
      // Fetching from public API [cite: 88, 108]
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const result = await response.json(); // Convert to JSON [cite: 113]
      
      console.log("Activity 4 & 5 Log:", result); // Console log [cite: 219, 224]
      setApiUser(result); // Update state to show on screen [cite: 114]
    } catch (error) {
      console.error("Error:", error); // Error handling [cite: 121, 225]
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', lineHeight: '1.5' }}>
      <h1>Experiment 9: All Pre-Lab Activities</h1>
      <hr />

      {/* Activity 1 & 2 */}
      <section style={{ marginBottom: '20px' }}>
        <h2>1 & 2: useEffect & Counter</h2>
        <p>Check console for mount and update logs.</p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      </section>

      {/* Activity 3 */}
      <section style={{ marginBottom: '20px', background: '#f0f0f0', padding: '10px' }}>
        <h2>3: Simulated API (setTimeout)</h2>
        {simulatedData ? <p style={{ color: 'blue' }}>{simulatedData}</p> : <p>Loading...</p>}
      </section>

      {/* Activity 4 & 5 */}
      <section style={{ marginBottom: '20px' }}>
        <h2>4 & 5: Fetch API (Async/Await)</h2>
        <button onClick={handleFetchData}>Fetch Data from API</button>
        {apiUser && (
          <div style={{ marginTop: '10px', border: '1px blue solid', padding: '10px' }}>
            <p><strong>Name:</strong> {apiUser.name}</p>
            <p><strong>Email:</strong> {apiUser.email}</p>
          </div>
        )}
      </section>

      {/* Activity 6 */}
      <section>
        <h2>6: Dynamic Rendering (map)</h2>
        <ul>
          {manualUsers.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;

