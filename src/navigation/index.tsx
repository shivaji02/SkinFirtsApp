import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './auth/authStack';
import  AppBottomTab  from './app/appBottomTab';


export const AppNav = ()=>{
console.log('AppNav.tsx');

    const isValidated = true;
   return(
    <NavigationContainer>
        {isValidated ? <AppBottomTab /> : <AuthStack />}
    </NavigationContainer>
   );
};
