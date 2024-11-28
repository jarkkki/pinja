import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConsultantsList from './components/ConsultantsList';
import ConsultantProfile from './components/ConsultantProfile';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConsultantsList />} />
        <Route path="/consultant/:id" element={<ConsultantProfile />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
