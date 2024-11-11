import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../../screens/auth/loginScreen";

export const AppointmentStack =()=>{
    const Stack = createNativeStackNavigator();
 
    return(
        <Stack.Navigator>
            <Stack.Screen name={"user/home"} component={LoginScreen}/>
        </Stack.Navigator>
    )
}