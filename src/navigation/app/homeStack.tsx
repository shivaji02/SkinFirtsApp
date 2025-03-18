/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home';
import DoctorsList from '../../screens/doctors/DoctorsList';
import DoctorInfo, { DoctorInfoRouteProp } from '../../screens/doctors/DoctorInfo';
import { COLORS } from '../../theme/colors';
import { FontStyle } from '../../theme/fontStyle';
import { Appearance, StyleSheet, View } from 'react-native';
import CustomIcon from '../../components/CustomIcon';
import { SearchIcon, SortBarIcon } from '../../assets/svg/HomeScreensvg';
import { scale } from '../../utils/responsiveUtils';
import ChatBot  from '../../screens/Home/ChatBot';
import ProductScreen from '../../screens/Home/ProductScreen';
const HeaderRight = () => (
    <View style={styles.headerRightI}>
        <CustomIcon IconComponent={SearchIcon} size={24} backgroundColor={COLORS.primary[300]} style={styles.icon}/>
        {/* <CustomIcon IconComponent={SortBarIcon} size={24} backgroundColor={COLORS.primary[300]}style={styles.icon}/> */}
    </View>
);

type HomeStackParamList = {
    HomeScreen: undefined;
    DoctorsList: { filter: string };
    DoctorInfo: { doctor: any };
    ChatBot: undefined;
};

export const HomeStack = () => {
    const Stack = createNativeStackNavigator();
    console.log('HomeStack.tsx');
    const [theme, setTheme] = useState(Appearance.getColorScheme());

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            if (colorScheme) {
                console.log(colorScheme, 'Hello');
                setTheme(colorScheme); // Update theme on system theme change
                // console.log(theme,"Theme")
            }
        });

        return () => {
            // console.log("HEllo")
            subscription.remove();
        };
    }, []);

    return (
        <Stack.Navigator
            screenOptions={{
                statusBarStyle: theme === 'light' ? 'dark' : 'light',
                statusBarAnimation: 'slide',
                statusBarBackgroundColor: theme === 'light' ? COLORS.common.white : COLORS.common.black,
                orientation: 'portrait',
                contentStyle: {
                    backgroundColor: theme === 'light' ? COLORS.common.white : COLORS.common.black,
                },
                headerTitleStyle: { ...FontStyle({ color: COLORS.primary.main, fontsize: 24, fontFamily: 'SemiBold', lineHeight: 22.08 }) },
                animation: 'ios_from_right',
                headerTintColor: COLORS.primary.main,
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerBackTitle: '',
                headerBackButtonDisplayMode: 'minimal',
                headerRight: HeaderRight,
            }}
        >
            <Stack.Screen name={'HomeScreen'} options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="DoctorsList"  component={DoctorsList} />
            <Stack.Screen name="DoctorInfo">
                {(props) => <DoctorInfo route={props.route as DoctorInfoRouteProp} />}
            </Stack.Screen>
            <Stack.Screen name="ChatBot" component={ChatBot} />
            <Stack.Screen name ="Products" component={ProductScreen}/>
        </Stack.Navigator>
    );
};


const styles = StyleSheet.create({
    headerRightI:{
        flexDirection:'row',
        gap:scale(5),
        // paddingTop:10,
    },
    icon:{
        paddingTop:scale(3),
    },
});
