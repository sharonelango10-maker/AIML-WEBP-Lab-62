import React from 'react';
// Importing all 6 activity components
import Activity1 from './Activity1';
import Activity2 from './Activity2';
import Activity3 from './Activity3';
import Activity4 from './Activity4';
import Activity5 from './Activity5';
import Activity6 from './Activity6';

function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>Experiment 8: React State Management</h1>
      <p style={{ textAlign: 'center' }}>SFIT - Department of AI & ML</p>
      
      <hr />
      <section>
        <h3>Activity 1: Basic useState</h3>
        <Activity1 />
      </section>

      <hr />
      <section>
        <h3>Activity 2: Simple Counter</h3>
        <Activity2 />
      </section>

      <hr />
      <section>
        <h3>Activity 3: Controlled Text Input</h3>
        <Activity3 />
      </section>

      <hr />
      <section>
        <h3>Activity 4: Multiple State Variables</h3>
        <Activity4 />
      </section>

      <hr />
      <section>
        <h3>Activity 5: Single State Object</h3>
        <Activity5 />
      </section>

      <hr />
      <section>
        <h3>Activity 6: Simple Validation Logic</h3>
        <Activity6 />
      </section>
      
      <footer style={{ marginTop: '50px', textAlign: 'center', color: '#95a5a6' }}>
        End of Lab Experiment 8
      </footer>
    </div>
  );
}

export default App;