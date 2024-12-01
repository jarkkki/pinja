import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/dark-theme.css'; // Tumman teeman tyylit, jos käytössä

// Konsulttien tiedot
const consultantsData = [
  { id: 1, name: 'Matti Meikäläinen', technology: 'React', experience: 5, education: 'B.Sc. Computer Science', certifications: 'React Certified' },
  { id: 2, name: 'Pekka Pekkala', technology: 'Node.js', experience: 3, education: 'M.Sc. Software Engineering', certifications: 'Node.js Certified' },
  { id: 3, name: 'Tuomas Virtanen', technology: 'Java', experience: 10, education: 'B.Sc. Software Engineering', certifications: 'Java Certified' },
];

function ConsultantsList() {
  const [search, setSearch] = useState('');

  // Suodattaminen hakutekijöiden mukaan
  const filteredConsultants = consultantsData.filter(
    (consultant) =>
      consultant.name.toLowerCase().includes(search.toLowerCase()) || // Hae nimellä
      consultant.technology.toLowerCase().includes(search.toLowerCase()) || // Hae teknologialla
      String(consultant.experience).includes(search) || // Hae kokemuksen mukaan
      consultant.certifications.toLowerCase().includes(search.toLowerCase()) || // Hae sertifikaateilla
      consultant.education.toLowerCase().includes(search.toLowerCase()) // Hae koulutuksella
  );

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', padding: '20px', minHeight: '100vh' }}>
      <h1>Konsultit</h1>
      <input
        type="text"
        placeholder="Hae nimellä, teknologialla, kokemuksella, sertifikaateilla tai koulutuksella"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '10px',
          margin: '10px 0',
          width: '100%',
          borderRadius: '5px',
          border: '1px solid #444',
          backgroundColor: '#1e1e1e',
          color: '#fff',
        }}
      />
      {filteredConsultants.length > 0 ? (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {filteredConsultants.map((consultant) => (
            <li key={consultant.id} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#292929', borderRadius: '5px' }}>
              <Link
                to={`/consultant/${consultant.id}`}
                style={{
                  color: '#61dafb',
                  textDecoration: 'none',
                  display: 'block',
                  padding: '10px',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#ffa726')}
                onMouseLeave={(e) => (e.target.style.color = '#61dafb')}
              >
                {consultant.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ei hakutuloksia löytynyt.</p> // Empty state -viesti
      )}
      <Link to="/consultant-dashboard" style={{ color: '#61dafb', textDecoration: 'none', marginTop: '20px', display: 'block' }}>
        Siirry konsultin näkymään
      </Link>
    </div>
  );
}

export default ConsultantsList;
