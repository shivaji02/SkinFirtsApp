import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../../screens/auth/loginScreen";
import { SignUpScreen } from "../../screens/auth/signUpScreen";
import { SetPasswordScreen } from "../../screens/auth/setPasswordScreen";

export const AuthStack =()=>{
    const Stack = createNativeStackNavigator();
 
    return(
        <Stack.Navigator>
            <Stack.Screen name={"user/login"} component={LoginScreen}/>
            <Stack.Screen name={"user/signUp"} component={SignUpScreen}/>
            <Stack.Screen name={"user/setPassword"} component={SetPasswordScreen}/>
        </Stack.Navigator>
    )
}