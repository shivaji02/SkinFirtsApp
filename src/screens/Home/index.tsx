import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeadBar from './HeadBar';
import IconBar from './IconBar';

const HomeScreen = () => {
    console.log('HomeScreen.tsx');
  return (
    <View style={styles.container}>
      <HeadBar />
      <IconBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  
});

export default HomeScreen;