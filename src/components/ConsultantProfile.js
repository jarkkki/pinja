import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Konsulttien tiedot (esimerkki)
const consultantsData = [
  { id: 1, name: 'John Doe', technology: 'React', experience: 5, education: 'B.Sc. Computer Science', certifications: 'React Certified' },
  { id: 2, name: 'Jane Smith', technology: 'Node.js', experience: 3, education: 'M.Sc. Software Engineering', certifications: 'Node.js Certified' },
  { id: 3, name: 'Tom Hanks', technology: 'Java', experience: 10, education: 'B.Sc. Software Engineering', certifications: 'Java Certified' },
  // Lisää muita konsultteja
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

      {/* PDF-latauslinkki */}
      <PDFDownloadLink document={<ConsultantCV consultant={consultant} />} fileName={`${consultant.name}_CV.pdf`}>
        {({ loading }) => (loading ? 'Ladataan...' : 'Lataa CV PDF:nä')}
      </PDFDownloadLink>
    </div>
  );
}

export default ConsultantProfile;
