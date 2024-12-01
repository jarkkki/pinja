import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AdminPanel from './components/AdminPanel';
import ConsultantsList from './components/ConsultantsList';
import ConsultantProfile from './components/ConsultantProfile';
import ConsultantDashboard from './components/ConsultantDashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultants-list" element={<ConsultantsList />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/consultant/:id" element={<ConsultantProfile />} />
        <Route path="/consultant-dashboard" element={<ConsultantDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

