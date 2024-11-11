import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LoginScreen } from "../../screens/auth/loginScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export const AppBottomTab =()=>{
    const BottomTab = createBottomTabNavigator();
 
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name={"user/home"} component={LoginScreen}/>
            <BottomTab.Screen name={"user/chat"} component={LoginScreen}/>
            <BottomTab.Screen name={"user/profile"} component={LoginScreen}/>
            <BottomTab.Screen name={"user/appointment"} component={LoginScreen}/>
        </BottomTab.Navigator>
    )
}