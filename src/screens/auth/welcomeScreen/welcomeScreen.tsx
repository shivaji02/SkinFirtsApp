import {Fragment, useEffect, useState} from 'react';
import {Appearance, Image, ScrollView, Text, View} from 'react-native';
import {useStyle} from './styles';
import React from 'react';
import {logo} from '../../../assets/images/icons';
import {OpacityButton} from '../../../components/button/opacityButton';
import {COLORS} from '../../../theme/colors';

export const WelcomeScreen = () => {
  const styles = useStyle();

  const [theme, setTheme] = useState(Appearance.getColorScheme());

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({colorScheme}) => {
      setTheme(colorScheme); // Update theme on system theme change
    });

    return () => {
      subscription.remove();
    };
  }, []);
   
  return (
    <Fragment>
      <ScrollView contentContainerStyle={styles.flexContainer} >
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logoStyle} />
          <Text style={styles.logoText}>Skin{'\n'}Firts</Text>
          <Text style={styles.logoSubText}>Dermatology Center</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
          <View style={styles.buttonsContainer}>
            <OpacityButton
              text={'Log In'}
              onPress={() => console.log('Hello')}
              buttonStyle={styles.buttonStyle}
            //   textStyle={{color: theme==="dark"? COLORS.common.white: COLORS.common.black}}
            />
            <OpacityButton
              text={'Sign Up'}
              onPress={() => console.log('Hello')}
              buttonStyle={styles.signUpStyle}
              textStyle={{color: COLORS.primary.main}}
            />
          </View>
        </View>
      </ScrollView>
    </Fragment>
  );
};
