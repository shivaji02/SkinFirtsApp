/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppNav } from './navigation'
import React from 'react';


 const App = ()=>{
// console.log('App.tsx in src');
    return(
        <SafeAreaView style={{flex:1}}>
           <AppNav/>
        </SafeAreaView>
    );
}

export default App;

