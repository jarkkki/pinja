import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, StyleSheet, View } from '@react-pdf/renderer';

// Konsulttien tiedot
const consultantsData = [
  { id: 1, name: 'Matti Meikäläinen', technology: 'React', experience: 5, education: 'B.Sc. Computer Science', certifications: 'React Certified' },
  { id: 2, name: 'Pekka Pekkala', technology: 'Node.js', experience: 3, education: 'M.Sc. Software Engineering', certifications: 'Node.js Certified' },
  { id: 3, name: 'Tuomas Virtanen', technology: 'Java', experience: 10, education: 'B.Sc. Software Engineering', certifications: 'Java Certified' },
];

const ConsultantCV = ({ consultant }) => {
  const styles = StyleSheet.create({
    page: { padding: 30 },
    section: { marginBottom: 10 },
    heading: { fontSize: 18, fontWeight: 'bold' },
    text: { fontSize: 12 },
  });

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{consultant.name}</Text>
          <Text style={styles.text}>Teknologia: {consultant.technology}</Text>
          <Text style={styles.text}>Kokemus: {consultant.experience} vuotta</Text>
          <Text style={styles.text}>Koulutus: {consultant.education}</Text>
          <Text style={styles.text}>Sertifikaatit: {consultant.certifications}</Text>
        </View>
      </Page>
    </Document>
  );
};

function AdminPanel() {
  const [search, setSearch] = useState('');

  const filteredConsultants = consultantsData.filter(
    (consultant) =>
      consultant.technology.toLowerCase().includes(search.toLowerCase()) ||
      String(consultant.experience).includes(search)
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
      <PDFDownloadLink
        document={
          <Document>
            <Page>
              {consultantsData.map((consultant) => (
                <View key={consultant.id}>
                  <Text>{consultant.name}</Text>
                  <Text>{consultant.technology}</Text>
                  <Text>{consultant.experience} vuotta kokemusta</Text>
                </View>
              ))}
            </Page>
          </Document>
        }
        fileName="tiimi_cv.pdf"
      >
        {({ loading }) => (loading ? 'Ladataan...' : 'Lataa tiimin CV:t PDF:nä')}
      </PDFDownloadLink>

      <h2>Siirry konsultin näkymään</h2>
      <Link to="/consultant-dashboard" style={{ color: '#61dafb', textDecoration: 'none' }}>
        Konsultin hallintapaneeli
      </Link>
    </div>
  );
}

export default AdminPanel;
