import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem', color: 'white' }}>
      <Link to="/" style={{ color: '#61dafb', marginRight: '1rem' }}>
        Etusivu
      </Link>
      <Link to="/admin-panel" style={{ color: '#61dafb', marginRight: '1rem' }}>
        Admin-paneeli
      </Link>
      <Link to="/consultant-dashboard" style={{ color: '#61dafb' }}>
        Konsultin hallintapaneeli
      </Link>
    </nav>
  );
}

export default Header;
