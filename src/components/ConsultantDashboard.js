import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ConsultantCV from './ConsultantCV';

const consultantsData = [
  {
    id: 1,
    name: 'Matti Meikäläinen',
    technology: 'React',
    experience: 5,
    education: 'B.Sc. Computer Science',
    certifications: 'React Certified',
  },
  {
    id: 2,
    name: 'Pekka Pekkala',
    technology: 'Node.js',
    experience: 3,
    education: 'M.Sc. Software Engineering',
    certifications: 'Node.js Certified',
  },
  {
    id: 3,
    name: 'Tuomas Virtanen',
    technology: 'Java',
    experience: 10,
    education: 'B.Sc. Software Engineering',
    certifications: 'Java Certified',
  },
];

function ConsultantDashboard() {
  return (
    <div style={{ backgroundColor: '#121212', color: '#fff', padding: '20px', minHeight: '100vh' }}>
      <h1>Konsultin hallintapaneeli</h1>
      <p>Tervetuloa konsulttien hallintaan!</p>
      <div>
        <h2>Konsulttien tiedot</h2>
        {consultantsData.map((consultant) => (
          <div
            key={consultant.id}
            style={{ marginBottom: '20px', padding: '10px', border: '1px solid #444', borderRadius: '5px' }}
          >
            <p><strong>Nimi:</strong> {consultant.name}</p>
            <p><strong>Teknologia:</strong> {consultant.technology}</p>
            <p><strong>Kokemus:</strong> {consultant.experience} vuotta</p>
            <p><strong>Koulutus:</strong> {consultant.education}</p>
            <p><strong>Sertifikaatit:</strong> {consultant.certifications}</p>
            <PDFDownloadLink document={<ConsultantCV consultant={consultant} />} fileName={`${consultant.name}_cv.pdf`}>
              {({ loading }) => (loading ? 'Ladataan...' : 'Lataa CV PDF:nä')}
            </PDFDownloadLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConsultantDashboard;
