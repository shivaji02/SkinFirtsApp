import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from '../../screens/auth/loginScreen/loginScreen';
export const ProfileStack =()=>{
    const Stack = createNativeStackNavigator();
 
    return(
        <Stack.Navigator>
            <Stack.Screen name={"user/home"} component={LoginScreen}/>
        </Stack.Navigator>
    )
}