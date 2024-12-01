import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: '#121212', color: '#fff' }}>
      <h1>Tervetuloa konsulttien hallintasovellukseen</h1>
      <p>Valitse toiminto:</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/consultants-list" style={{ color: '#61dafb', marginRight: '1rem', textDecoration: 'none' }}>
          Konsulttilista
        </Link>
        <Link to="/admin-panel" style={{ color: '#61dafb', marginRight: '1rem', textDecoration: 'none' }}>
          Admin-paneeli
        </Link>
        <Link to="/consultant-dashboard" style={{ color: '#61dafb', textDecoration: 'none' }}>
          Konsultin hallintapaneeli
        </Link>
      </div>
    </div>
  );
}

export default Home;
