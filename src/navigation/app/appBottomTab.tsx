/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './homeStack';
import { ActiveHomeIcon, ActiveChatIcon, InactiveHomeIcon, InactiveChatIcon, ActiveProfileIcon, InactiveProfileIcon,  ActiveCalendarIcon, InactiveCalendarIcon } from '../../assets/svg/TabBarSvg'
import { COLORS} from '../../theme/colors';     

const BottomTab = createBottomTabNavigator();

export const AppBottomTab = () => {
  console.log('AppBottomTab.tsx');
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,//label is hidden
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <ActiveHomeIcon size={size} />
            ) : (
              <InactiveHomeIcon size={size} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={HomeStack}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <ActiveChatIcon size={size} />
            ) : (
              <InactiveChatIcon size={size} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={HomeStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <ActiveProfileIcon size={size} />
            ) : (
              <InactiveProfileIcon size={size} />
            ),
        }}
      />
      <BottomTab.Screen
        name="Appointment"
        component={HomeStack}
        options={{
          tabBarLabel: 'Appointment',
          tabBarIcon: ({ focused, size }) =>
            focused ? (
              <ActiveCalendarIcon size={size} />
            ) : (
              <InactiveCalendarIcon size={size} />
            ),
        }}
      />
    </BottomTab.Navigator>
  );
};
const styles = {
  tabBar: {
    backgroundColor: COLORS.primary.main,
    height: 60,
    width: '92%',
    borderRadius: 30,
    paddingTop: 10,
    bottom: 10,
    position: 'absolute',
    marginHorizontal: 17,
  },
};

export default AppBottomTab;
