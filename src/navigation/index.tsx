/* eslint-disable quotes */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./auth/authStack";
import AppBottomTab from './app/appBottomTab';


export const AppNav =()=>{
console.log('AppNav.tsx');

    const isValidated = false;
   return(
    <NavigationContainer>
        {isValidated ? <AuthStack /> : <AppBottomTab />}
    </NavigationContainer>
   );
};