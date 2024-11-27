// src/components/CenterText.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CenterText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default CenterText;