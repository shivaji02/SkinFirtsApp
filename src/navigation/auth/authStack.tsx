/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import LoginScreen from '../../screens/auth/loginScreen/loginScreen';
import { SetPasswordScreen } from '../../screens/auth/setPassword/setPasswordScreen';
import { SignUpScreen } from '../../screens/auth/signUp/signUpScreen';
import { COLORS } from '../../theme/colors';
import { WelcomeScreen } from '../../screens/auth/welcomeScreen/welcomeScreen';
import { FontStyle } from '../../theme/fontStyle';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import HeadBack from '../../components/Goback';


const Stack = createNativeStackNavigator();

export const AuthStack = () => {

  const navigation = useNavigation<NavigationProp<any>>();
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      console.log(colorScheme,"Hello")
      setTheme(colorScheme); // Update theme on system theme change
      // console.log(theme,"Theme")
    });

    return () => {
      // console.log("HEllo")
      subscription.remove();
    };
  }, []);

  return (
    <Stack.Navigator screenOptions={{
      statusBarStyle: theme === 'light' ? 'dark' : 'light',
      statusBarAnimation: 'slide',
      statusBarBackgroundColor:theme === 'light' ? COLORS.common.white : COLORS.common.black,
      // orientation: 'portrait',
      contentStyle: {
        backgroundColor: theme === 'light' ? COLORS.common.white : COLORS.common.black,
      },
      headerTitleStyle:{...FontStyle({color: COLORS.primary.main, fontsize: 24, fontFamily: 'SemiBold', lineHeight:22.08}),},
      animation: 'slide_from_right',
      headerTintColor : COLORS.primary.main,
      headerShadowVisible : false,
      headerTitleAlign:'center',
      // headerLeft: () => (
      //   <HeadBack title={'Doctor List'} showIcon={false} />
      // )
    }}>
      <Stack.Screen name={'welcome'} component={WelcomeScreen} options={{headerShown:false}} />
      <Stack.Screen name={'login'} component={LoginScreen} options={{title:"Log In"}} />
      <Stack.Screen name={'signUp'} component={SignUpScreen} options={{title:"New Account"}} />
      <Stack.Screen name={'setPassword'} component={SetPasswordScreen} options={{title:"Set Password"}}/>
    </Stack.Navigator>
  );
};

