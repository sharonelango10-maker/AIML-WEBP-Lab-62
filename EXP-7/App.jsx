
import React from 'react';

// Child Component receiving props
function Student(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Class: {props.studentClass}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>STUDENT INFORMATION</h1>
      <Student name="Rahul" studentClass="7" />
    </div>
  );
}

export default App;