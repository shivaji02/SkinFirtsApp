import { NavigationContainer } from "@react-navigation/native"
import { View } from "react-native"
import { AuthStack } from "./auth/authStack"

export const AppNav =()=>{

   return(
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
   )
}