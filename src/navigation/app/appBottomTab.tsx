/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import LoginScreen from '../../screens/auth/loginScreen/loginScreen';
import { HomeStack } from './homeStack';
import { COLORS } from '../../theme/colors';
import CustomImage from '../../components/CustomImage';

const BottomTab = createBottomTabNavigator();

export const AppBottomTab = () => {
  console.log('AppBottomTab.tsx');
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <CustomImage source={require('src/assets/images/TabBarIcons/PNG/activeHomeIcon.png')} size={size} />
            ) : (
              <CustomImage source={require('src/assets/images/TabBarIcons/PNG/inactiveHomeIcon.png')} size={size} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <CustomImage source={require('src/assets/images/TabBarIcons/PNG/activeChatIcon.png')} size={size} />
            ) : (
              <CustomImage source={require('src/assets/images/TabBarIcons/PNG/inactiveChatIcon.png')} size={size} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <CustomImage source={require('src/assets/images/TabBarIcons/PNG/activeProfileIcon.png')} size={size} />
            ) : (
              <CustomImage source={require('src/assets/images/TabBarIcons/PNG/inactiveProfileIcon.png')} size={size} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Appointment"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Appointment',
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <CustomImage source={require('src/assets/images/TabBarIcons/PNG/activeCalendarIcon.png')} size={size} />
            ) : (
              <CustomImage source={require('src/assets/images/TabBarIcons/PNG/inactiveCalendarIcon.png')} size={size} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.primary.main,
    borderTopWidth: 0,
    height: 58,
    width: 398,
    alignSelf: 'center',
    borderRadius: 35,
    paddingBottom: 5,
    marginBottom: 5,
  },
});

export default AppBottomTab;
