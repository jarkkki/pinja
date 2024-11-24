import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const consultantsData = [
  { id: 1, name: 'John Doe', technology: 'React', experience: 5 },
  { id: 2, name: 'Jane Smith', technology: 'Node.js', experience: 3 },
  // Lisää muita konsultteja
];

function ConsultantsList() {
  const [search, setSearch] = useState('');

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
