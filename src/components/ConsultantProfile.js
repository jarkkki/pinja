import React from 'react';
import { useParams } from 'react-router-dom';

// Konsulttien tiedot
const consultantsData = [
  { id: 1, name: 'Matti Meikäläinen', technology: 'React', experience: 5, education: 'B.Sc. Computer Science', certifications: 'React Certified' },
  { id: 2, name: 'Pekka Pekkala', technology: 'Node.js', experience: 3, education: 'M.Sc. Software Engineering', certifications: 'Node.js Certified' },
  { id: 3, name: 'Tuomas Virtanen', technology: 'Java', experience: 10, education: 'B.Sc. Software Engineering', certifications: 'Java Certified' },
];

function ConsultantProfile() {
  const { id } = useParams(); // Hae ID URL-reitistä
  const consultant = consultantsData.find((c) => c.id === parseInt(id, 10)); // Hae konsultin tiedot ID:n perusteella

  if (!consultant) {
    return (
      <div style={{ backgroundColor: '#121212', color: '#fff', padding: '20px', minHeight: '100vh' }}>
        <h1>Konsulttia ei löydy</h1>
        <p>Virheellinen konsultin ID tai konsultti ei ole enää saatavilla.</p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', padding: '20px', minHeight: '100vh' }}>
      <h1>{consultant.name}</h1>
      <p><strong>Teknologia:</strong> {consultant.technology}</p>
      <p><strong>Kokemus:</strong> {consultant.experience} vuotta</p>
      <p><strong>Koulutus:</strong> {consultant.education}</p>
      <p><strong>Sertifikaatit:</strong> {consultant.certifications}</p>
    </div>
  );
}

export default ConsultantProfile;

