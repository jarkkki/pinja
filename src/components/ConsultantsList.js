import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Konsulttien tiedot
const consultantsData = [
  { id: 1, name: 'Matti Meikäläinen', technology: 'React', experience: 5, education: 'B.Sc. Computer Science', certifications: 'React Certified' },
  { id: 2, name: 'Pekka Pekkala', technology: 'Node.js', experience: 3, education: 'M.Sc. Software Engineering', certifications: 'Node.js Certified' },
  { id: 3, name: 'Tuomas Virtanen', technology: 'Java', experience: 10, education: 'B.Sc. Software Engineering', certifications: 'Java Certified' },
  // Lisää muita konsultteja
];

function ConsultantsList() {
  const [search, setSearch] = useState('');

  // Suodattaminen hakutekijöiden mukaan
  const filteredConsultants = consultantsData.filter(
    (consultant) =>
      consultant.technology.toLowerCase().includes(search.toLowerCase()) ||
      String(consultant.experience).includes(search)
  );

  return (
    <div>
      <h1>Konsultit</h1>
      <input
        type="text"
        placeholder="Hae teknologian tai kokemuksen mukaan"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredConsultants.map((consultant) => (
          <li key={consultant.id}>
            <Link to={`/consultant/${consultant.id}`}>{consultant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConsultantsList;
