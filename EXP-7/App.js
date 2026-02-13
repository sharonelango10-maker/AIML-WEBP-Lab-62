import React from 'react';
import Header from './components/Header'; // Functional
import ProjectList from './components/ProjectList'; // Class-based
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <h2>My Work</h2>
        <ProjectList />
      </main>
      <footer>
        <p>© 2026 Developer Portfolio</p>
      </footer>
    </div>
  );
}

export default App;