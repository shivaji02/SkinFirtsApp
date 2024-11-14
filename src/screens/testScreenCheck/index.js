import React from 'react';
import { View } from 'react-native';
import ActiveHomeIcon from '../../assets/images/TabBarIcons/activeHomeIcon.svg';

const TestScreen = () => {
  console.log("TestCheckscreen from HomeSTack");
  return (
    <View>
      <ActiveHomeIcon width={50} height={50} fill="blue" />
    </View>
  );
};

export default TestScreen;
