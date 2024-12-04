/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home';
import DoctorsList from '../../screens/doctors/DoctorsList';
import DoctorInfo from '../../screens/doctors/DoctorInfo';
import { COLORS } from '../../theme/colors';
import { FontStyle } from '../../theme/fontStyle';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Appearance, Platform } from 'react-native';

export const HomeStack = ()=>{
    const Stack = createNativeStackNavigator();
    console.log('HomeStack.tsx');
    const navigation = useNavigation<NavigationProp<any>>();
    const [theme, setTheme] = useState(Appearance.getColorScheme());
  
    useEffect(() => {
      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        if (colorScheme) {
          console.log(colorScheme, "Hello");
          setTheme(colorScheme); // Update theme on system theme change
          // console.log(theme,"Theme")
        }
      });
  
      return () => {
        // console.log("HEllo")
        subscription.remove();
      };
    }, []);    return(
        <Stack.Navigator
        screenOptions={
            {
            statusBarStyle: theme === 'light' ? 'dark' : 'light',
            statusBarAnimation: 'slide',
            statusBarBackgroundColor: theme === 'light' ? COLORS.common.white : COLORS.common.black,
            orientation: 'portrait',
            contentStyle: {
              backgroundColor: theme === 'light' ? COLORS.common.white : COLORS.common.black,
            },
            headerTitleStyle: {...FontStyle({color: COLORS.primary.main, fontsize: 24, fontFamily: 'SemiBold', lineHeight: 22.08}),},
            animation: 'slide_from_right',
            headerTintColor: COLORS.primary.main,
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerBackTitle: '',
            headerBackButtonDisplayMode: "minimal"            }
        }
        >
            <Stack.Screen name={'HomeScreen'} options={{headerShown: false}} component={HomeScreen}/>
            <Stack.Screen name="DoctorsList" component={DoctorsList} />
            <Stack.Screen name="DoctorInfo" component={DoctorInfo} />
            {/* <Stack.Screen name={"TestScreen"} component={TestScreen}/> */}
        </Stack.Navigator>
    );
};
