import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeadBar from './HeadBar';
import IconBar from './IconBar';
import CalAgend from './CalAgend';
// import { CalendarBox } from '../../components/CalendarBox';
// import { AgendaBox } from '../../components/AgendaBox';

const HomeScreen = () => {

    console.log('HomeScreen.tsx');
  return (
    <View style={styles.container}>
      <HeadBar />
      <IconBar />
      <CalAgend/>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f5fcff',
  },
  
});

export default HomeScreen;