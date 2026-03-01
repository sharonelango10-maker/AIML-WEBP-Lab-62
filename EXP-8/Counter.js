import React, { useState } from 'react';

const Counter = () => {
  // Step 3: Initialize Counter and Step states
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Step 5: Handle step change
  const handleStepChange = (e) => {
    const value = parseInt(e.target.value);
    setStep(isNaN(value) ? 0 : value);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', marginTop: '20px' }}>
      <h2>Part B: Counter App</h2>
      
      <div>
        <label>Step Value: </label>
        <input type="number" value={step} onChange={handleStepChange} />
      </div>

      <h1 style={{ fontSize: '48px' }}>{count}</h1>

      {/* Step 6, 7, 8: Controls */}
      <button onClick={() => setCount(count + step)}>Increase</button>
      <button onClick={() => setCount(count - step)} style={{ margin: '0 10px' }}>Decrease</button>
      <button onClick={() => setCount(0)} style={{ backgroundColor: '#ff4d4d', color: 'white' }}>Reset</button>

      <p style={{ marginTop: '10px', fontSize: '12px' }}>
        Observe: Clicking buttons updates state and triggers re-render without page reload.
      </p>
    </div>
  );
};

export default Counter;