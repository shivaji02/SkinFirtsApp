import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../../screens/Home";
export const HomeStack =()=>{
    const Stack = createNativeStackNavigator();
    console.log('HomeStack.tsx');
    return(
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
        </Stack.Navigator>
    )
}