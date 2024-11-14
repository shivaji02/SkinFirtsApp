import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    console.log('HomeScreen.tsx');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World! SKin Firts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default HomeScreen;