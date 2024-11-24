import React from 'react';
import { useParams } from 'react-router-dom';

const consultantsData = [
  { id: 1, name: 'John Doe', technology: 'React', experience: 5 },
  { id: 2, name: 'Jane Smith', technology: 'Node.js', experience: 3 },
  // Lisää muita konsultteja
];

function ConsultantProfile() {
  const { id } = useParams();
  const consultant = consultantsData.find((c) => c.id === parseInt(id));

  if (!consultant) {
    return <div>Konsulttia ei löydy.</div>;
  }

  return (
    <div>
      <h2>{consultant.name}</h2>
      <p>Teknologia: {consultant.technology}</p>
      <p>Kokemus: {consultant.experience} vuotta</p>
    </div>
  );
}

export default ConsultantProfile;
