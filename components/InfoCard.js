import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const InfoCard = ({ title, content, translation }) => {
  return (
    <View style={[globalStyles.card, styles.card]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.arabic}>{content}</Text>
      {translation && <Text style={styles.translation}>{translation}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F6F4FF',
    borderLeftWidth: 4,
    borderLeftColor: '#6C4AB6',
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5D3FD3',
    marginBottom: 8,
  },
  arabic: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  translation: {
    fontSize: 16,
    color: '#555',
    marginVertical: 5,
  },
});

export default InfoCard;
