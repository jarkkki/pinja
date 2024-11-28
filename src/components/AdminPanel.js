import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';

// Konsulttien tiedot
const consultantsData = [
  { id: 1, name: 'John Doe', technology: 'React', experience: 5, education: 'B.Sc. Computer Science', certifications: 'React Certified' },
  { id: 2, name: 'Jane Smith', technology: 'Node.js', experience: 3, education: 'M.Sc. Software Engineering', certifications: 'Node.js Certified' },
  { id: 3, name: 'Tom Hanks', technology: 'Java', experience: 10, education: 'B.Sc. Software Engineering', certifications: 'Java Certified' },
  // Lisää muita konsultteja
];

const TeamCV = () => (
  <Document>
    {consultantsData.map((consultant) => (
      <Page key={consultant.id} style={{ padding: 30 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{consultant.name}</Text>
          <Text style={{ fontSize: 12 }}>Teknologia: {consultant.technology}</Text>
          <Text style={{ fontSize: 12 }}>Kokemus: {consultant.experience} vuotta</Text>
          <Text style={{ fontSize: 12 }}>Koulutus: {consultant.education}</Text>
          <Text style={{ fontSize: 12 }}>Sertifikaatit: {consultant.certifications}</Text>
        </View>
      </Page>
    ))}
  </Document>
);

function AdminPanel() {
  const [search, setSearch] = useState('');

  const filteredConsultants = consultantsData.filter(
    (consultant) =>
      consultant.technology.toLowerCase().includes(search.toLowerCase()) ||
      String(consultant.experience).includes(search) ||
      consultant.certifications.toLowerCase().includes(search.toLowerCase()) ||
      consultant.education.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Pääkäyttäjän hallintapaneeli</h1>
      <input
        type="text"
        placeholder="Etsi konsultteja"
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

      <h2>Tiimin CV:t</h2>
      <div>
        <PDFDownloadLink document={<TeamCV />} fileName="tiimi_cv.pdf">
          {({ loading }) => (loading ? 'Ladataan...' : 'Lataa tiimin CV:t PDF:nä')}
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default AdminPanel;
