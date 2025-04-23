import React from 'react';
import {  StyleSheet,SafeAreaView } from 'react-native';
import HeadBar from './HeadBar';
import IconBar from './IconBar';
import CalAgend from './CalAgend';
// import ChatBot from './ChatBot';
// import { CalendarBox } from '../../components/CalendarBox';
// import { AgendaBox } from '../../components/AgendaBox';

const HomeScreen = () => {

    console.log('HomeScreen.tsx');
  return (
      <SafeAreaView style={styles.container}>
      <HeadBar />
      <IconBar />
      <CalAgend/>
      {/* <ChatBot/> */}
     </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    //backgroundColor: '#f5fcff',
    // marginTop: Platform.OS === 'ios' ? -15 : 0,
    // marginBottom: Platform.OS === 'ios' ? 10 : 0,
  },
});

export default HomeScreen;