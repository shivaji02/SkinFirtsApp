import React, { useEffect } from 'react';
import { View, Text} from 'react-native';
import { useStyle } from './styles';

const LoginScreen = () => {

  const styles = useStyle();
  useEffect(()=>{
    console.log("HELLO from LoginScreen.tsx");
  })

  return (
    <View >
      <Text>Welcome to Login Screen</Text>

    </View>
  );
};

export default LoginScreen;
