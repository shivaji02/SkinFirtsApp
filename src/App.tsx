/* eslint-disable react-native/no-inline-styles */
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppNav } from './navigation';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = ()=>{
// console.log('App.tsx in src');
    return(
        <SafeAreaView style={{flex:1}}>
            <QueryClientProvider client={queryClient}>
            <AppNav/>
            </QueryClientProvider>
        </SafeAreaView>
    );
};

export default App;
