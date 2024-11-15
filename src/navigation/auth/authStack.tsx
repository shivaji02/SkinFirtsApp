/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import LoginScreen from '../../screens/auth/loginScreen/loginScreen';
import { SetPasswordScreen } from '../../screens/auth/setPassword/setPasswordScreen';
import { SignUpScreen } from '../../screens/auth/signUp/signUpScreen';
import { COLORS } from '../../theme/colors';
import { WelcomeScreen } from '../../screens/auth/welcomeScreen/welcomeScreen';


const Stack = createNativeStackNavigator();

export const AuthStack = () => {
{console.log('AuthStack.tsx')};
  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme); // Update theme on system theme change
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      statusBarTranslucent: false,
      statusBarBackgroundColor: COLORS.common.transparent,
      statusBarStyle: theme === 'light' ? 'dark' : 'light',
      statusBarAnimation: 'slide',
      orientation: 'portrait',
      contentStyle: {
        backgroundColor: theme === 'light' ? COLORS.common.white : COLORS.common.black,
      },
      animation: 'slide_from_right'
    }}>
      <Stack.Screen name={'welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'login'} component={LoginScreen} />
      <Stack.Screen name={'signUp'} component={SignUpScreen} />
      <Stack.Screen name={'setPassword'} component={SetPasswordScreen} />
    </Stack.Navigator>
  );
};

