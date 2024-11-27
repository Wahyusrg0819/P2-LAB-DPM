import React from 'react';
import { View, StyleSheet } from 'react-native';
import Box from '../components/Box';
import CenterText from '../components/CenterText';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Box color="#ff6b6b" />
        <Box color="#4ecdc4" />
      </View>
      <CenterText>Teks di Tengah</CenterText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default MainScreen;