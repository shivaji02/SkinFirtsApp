import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./auth/authStack";

export const AppNav =()=>{

   return(
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
   );
};