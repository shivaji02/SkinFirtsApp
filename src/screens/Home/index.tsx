import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import HeadBar from './HeadBar';
import IconBar from './IconBar';
import CalendarWithAgenda from '../../components/calenderBlock/index.tsx';
import { calendarData } from '../../data/calendarData/index.ts';
const HomeScreen = () => {

  
    console.log('HomeScreen.tsx');
  return (
    <View style={styles.container}>
      <HeadBar />
      <IconBar />
<CalendarWithAgenda data={calendarData}/>
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