import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeadBar from './HeadBar';
import IconBar from './IconBar';
import CalendarBox from '../../components/calenderBox.tsx';
import { COLORS } from '../../theme/colors';
import{calendarData}  from '../../data/calendarData'
const HomeScreen = () => {
    console.log('HomeScreen.tsx');
  return (
    <View style={styles.container}>
      <HeadBar />
      <IconBar />
      <CalendarBox data={calendarData}/>
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