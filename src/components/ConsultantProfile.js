import React from 'react';
import { useParams } from 'react-router-dom';

// Konsulttien tiedot (sama kuin ConsultantsList.js)
const consultantsData = [
  { id: 1, name: 'John Doe', technology: 'React', experience: 5, education: 'B.Sc. Computer Science', certifications: 'React Certified' },
  { id: 2, name: 'Jane Smith', technology: 'Node.js', experience: 3, education: 'M.Sc. Software Engineering', certifications: 'Node.js Certified' },
  { id: 3, name: 'Tom Hanks', technology: 'Java', experience: 10, education: 'B.Sc. Software Engineering', certifications: 'Java Certified' },
  // Lisää muita konsultteja
];

function ConsultantProfile() {
  const { id } = useParams();  // Haetaan URL-parametri
  const consultant = consultantsData.find(c => c.id === parseInt(id));

  if (!consultant) {
    return <h2>Konsulttia ei löydy</h2>;
  }

  return (
    <div>
      <h1>{consultant.name}</h1>
      <p><strong>Teknologia:</strong> {consultant.technology}</p>
      <p><strong>Kokemus:</strong> {consultant.experience} vuotta</p>
      <p><strong>Koulutus:</strong> {consultant.education}</p>
      <p><strong>Sertifikaatit:</strong> {consultant.certifications}</p>
    </div>
  );
}

export default ConsultantProfile;
