/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/react-in-jsx-scope */
import  LoginScreen  from '../../screens/auth/loginScreen/loginScreen';
import { HomeStack } from './homeStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet } from 'react-native';

export const AppBottomTab =()=>{
    const BottomTab = createBottomTabNavigator();
    console.log('AppBottomTab.tsx');
    return(
        <BottomTab.Navigator
        screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: styles.tabBar,
        }}
        >
            <BottomTab.Screen name='Home'  component={HomeStack}/>
            <BottomTab.Screen name={'Chat'} component={LoginScreen}/>
            <BottomTab.Screen name={'Profile'} component={LoginScreen}/>
            <BottomTab.Screen name={'Appointment'} component={LoginScreen}/>
        </BottomTab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '2260F',
        borderTopWidth: 0,
        elevation: 5,
        height: 48,
        width:298,
        justifyContent: 'center',
            alignItems: 'center',
        borderRadius: 25,
        paddingBottom: 5,
    },
});