// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import LoginScreen from '../../screens/auth/loginScreen/loginScreen';
// import { HomeStack } from './homeStack';
// import { COLORS } from '../../theme/colors';
// import { CustomImage } from '../../components/CustomImage';

// // Importing SVGs as React components
// import ActiveHomeIcon from '../../assets/images/TabBarIcons/activeHomeIcon.svg';
// import InactiveHomeIcon from '../../assets/images/TabBarIcons/inactiveHomeIcon.svg';
// import ActiveChatIcon from '../../assets/images/TabBarIcons/activeChatIcon.svg';
// import InactiveChatIcon from '../../assets/images/TabBarIcons/inacativeChatIcon.svg';
// import ActiveProfileIcon from '../../assets/images/TabBarIcons/activeProfileIcon.svg';
// import InactiveProfileIcon from '../../assets/images/TabBarIcons/inactiveProfileIcon.svg';
// import ActiveCalenderIcon from '../../assets/images/TabBarIcons/activeCalenderIcon.svg';
// import InactiveCalenderIcon from '../../assets/images/TabBarIcons/inactiveCalenderIcon.svg';

// export const AppBottomTab = () => {
//   const BottomTab = createBottomTabNavigator();
//   console.log('AppBottomTab.tsx');

//   return (
//     <BottomTab.Navigator
//       screenOptions={{
//         headerShown: false,
//         tabBarStyle: styles.tabBar,
//       }}
//     >
//       <BottomTab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ focused }) => getTabBarIcon('Home', focused),
//         }}
//       />
//       <BottomTab.Screen
//         name="Chat"
//         component={LoginScreen}
//         options={{
//           tabBarLabel: 'Chat',
//           tabBarIcon: ({ focused }) => getTabBarIcon('Chat', focused),
//         }}
//       />
//       <BottomTab.Screen
//         name="Profile"
//         component={LoginScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ focused }) => getTabBarIcon('Profile', focused),
//         }}
//       />
//       <BottomTab.Screen
//         name="Appointment"
//         component={LoginScreen}
//         options={{
//           tabBarLabel: 'Appointment',
//           tabBarIcon: ({ focused }) => getTabBarIcon('Appointment', focused),
//         }}
//       />
//     </BottomTab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   tabBar: {
//     backgroundColor: COLORS.primary.main,
//     borderTopWidth: 0,
//     height: 58,
//     width: 398,
//     alignSelf: 'center',
//     borderRadius: 35,
//     paddingBottom: 5,
//     marginBottom: 5,
//   },
// });

// // Updated getTabBarIcon to use imported SVG components directly
// const getTabBarIcon = (routeName, focused) => {
//   switch (routeName) {
//     case 'Home':
//       return focused ? <ActiveHomeIcon width={23} height={23} /> : <InactiveHomeIcon width={23} height={23} />;
//     case 'Chat':
//       return focused ? <ActiveChatIcon width={23} height={23} /> : <InactiveChatIcon width={23} height={23} />;
//     case 'Profile':
//       return focused ? <ActiveProfileIcon width={23} height={23} /> : <InactiveProfileIcon width={23} height={23} />;
//     case 'Appointment':
//       return focused ? <ActiveCalenderIcon width={23} height={23} /> : <InactiveCalenderIcon width={23} height={23} />;
//     default:
//       return null;
//   }
// };


import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack } from './homeStack';
import { ActiveHomeIcon, ActiveChatIcon, InactiveHomeIcon, InactiveChatIcon } from '../../assets/svg/TabBarSvg'

const BottomTab = createBottomTabNavigator();

const AppBottomTab: React.FC = () => {
    console.log('AppBottomTab.tsx');
  return (
    <BottomTab.Navigator
    
      screenOptions={{
        headerShown: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveHomeIcon width={23} height={23} /> : <InactiveHomeIcon width={23} height={23} />,
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ focused }) =>
            focused ? <ActiveChatIcon width={23} height={23} /> : <InactiveChatIcon width={23} height={23} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTab;