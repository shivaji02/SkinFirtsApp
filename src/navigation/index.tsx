/* eslint-disable quotes */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./auth/authStack";
import  AppBottomTab  from './app/appBottomTab';
import { Auth } from "../types";


export const AppNav =()=>{
console.log('AppNav.tsx');

    const isValidated = false;
   return(
    <NavigationContainer>
        {isValidated ? <AppBottomTab /> : <AuthStack />}
    </NavigationContainer>
   );
};