import React, { useState } from 'react';

const SpaNav = () => {
  const [page, setPage] = useState("Home");

  return (
    <div style={{ background: '#f0f0f0', padding: '20px' }}>
      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("About")}>About</button>
      <hr />
      <h3>{page === "Home" ? "This is Home Page" : "This is About Page"}</h3>
    </div>
  );
};

export default SpaNav;