/* eslint-disable react/react-in-jsx-scope */
import  LoginScreen  from '../../screens/auth/loginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const AppBottomTab =()=>{
    const BottomTab = createBottomTabNavigator();
 
    return(
        <BottomTab.Navigator initialRouteName='home'>
            <BottomTab.Screen name={'home'} component={LoginScreen}/>
            <BottomTab.Screen name={'user/chat'} component={LoginScreen}/>
            <BottomTab.Screen name={'user/profile'} component={LoginScreen}/>
            <BottomTab.Screen name={'user/appointment'} component={LoginScreen}/>
        </BottomTab.Navigator>
    )
}