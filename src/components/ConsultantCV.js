import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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

export default ConsultantCV;
