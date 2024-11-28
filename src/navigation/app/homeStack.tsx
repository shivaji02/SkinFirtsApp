import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home';

export const HomeStack = ()=>{
    const Stack = createNativeStackNavigator();
    console.log('HomeStack.tsx');
    return(
        <Stack.Navigator
        screenOptions={
            {
                headerShown: false,
                // statusBarTranslucent: false,
                statusBarBackgroundColor: 'transparent',
                statusBarStyle: 'dark',
                statusBarAnimation: 'slide',
                orientation: 'portrait',
                contentStyle: {
                backgroundColor: 'white',
                },
                animation: 'slide_from_right',
            }
        }

        >
            <Stack.Screen name={'HomeScreen'} component={HomeScreen}/>
            {/* <Stack.Screen name={"TestScreen"} component={TestScreen}/> */}
        </Stack.Navigator>
    );
};
