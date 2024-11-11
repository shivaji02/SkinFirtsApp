/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  
} from 'react-native';


const App = () => {
  console.log('app.tsx');
  return (
    <SafeAreaView  style={styles.safeArea}>
          <Text >
        SKINFIRST APP
          </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea:{
    flex:1,
  },
});

export default App;
