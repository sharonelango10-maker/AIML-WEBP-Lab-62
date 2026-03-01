import React from 'react';
import LoginForm from './LoginForm';
import Counter from './Counter';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>Experiment 8: State Management</h1>
      <hr />
      
      {/* Rendering Part A */}
      <LoginForm />
      
      <hr />
      
      {/* Rendering Part B */}
      <Counter />
      
    </div>
  );
}

export default App;