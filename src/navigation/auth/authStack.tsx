import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignUpScreen } from "../../screens/auth/signUpScreen";
import { SetPasswordScreen } from "../../screens/auth/setPasswordScreen";
import { COLORS } from "../../theme/colors";
import { Appearance } from "react-native";
import { useEffect, useState } from "react";
import LoginScreen from "../../screens/auth/loginScreen";

const Stack = createNativeStackNavigator();

export const AuthStack =()=>{

const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme); // Update theme on system theme change
    });

    return () => {
      subscription.remove();
    };
  }, []);
 
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,
                statusBarTranslucent: true,
                statusBarBackgroundColor:COLORS.common.transparent,
                statusBarStyle:theme==='light'?'dark':'light',
                statusBarAnimation: "slide",
                orientation: "portrait",
                contentStyle: {
                  backgroundColor: theme==='light'?COLORS.common.white:COLORS.common.black,
                },
                animation: "slide_from_right"
        }}>
            <Stack.Screen name={"user/login"} component={LoginScreen}/>
            <Stack.Screen name={"user/signUp"} component={SignUpScreen}/>
            <Stack.Screen name={"user/setPassword"} component={SetPasswordScreen}/>
        </Stack.Navigator>
    )
}

