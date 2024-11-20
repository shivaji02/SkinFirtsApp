import React from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';
import  CustomImage  from '../../components/CustomImage';
import { personalDetails } from '../../data/PersonalDetails';
import { LeagueSpartanFont } from '../../theme/fontStyle';
import { COLORS } from '../../theme/colors';
import CustomIcon from '../../components/CustomIcon';
import { scale,moderateScale,verticalScale } from '../../utils/responsiveUtils';

import { NoticationBellIcon, SettingIcon } from '../../assets/svg/HomeScreensvg';
const HeadBar = () => {
    console.log('HomeScreen.tsx');
  return (
    <View style={styles.container}>
      <View style={styles.imgtext}>
      <CustomImage
        source={require('../../assets/png/HomeScreenpng/profileimage.png')}
        height={70}
        width={70}
        borderRadius={100}
        style={styles.image}
        
      />
      <View  style =  {styles.textcontainer}>
    <Text style={[styles.text, styles.welcomeText]}>Hi, WelcomeBack</Text>
    <Text style={[styles.text,styles.nameText]}>{personalDetails.name}</Text>
    </View>
        </View>
        <View style={styles.iconcontainer}>
        <CustomIcon IconComponent={NoticationBellIcon} size={30} style={styles.icon} />
        <CustomIcon IconComponent={SettingIcon} size={30} style={styles.icon}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    justifyContent: 'space-between',
    padding: 10,
    marginLeft: -40,
    ...(Platform.OS === 'ios' &&  {
        marginTop: 45, // Apply marginTop only for iOS 10
      }),
    },
  image: {
    // left: 10,
    // top: 10,
    gap:20,
    marginLeft:-10,

  },

  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    // fontFamily: LeagueSpartanFont.Light,
    lineHeight: 25,
  },
    welcomeText: {
        fontSize: 20,
        marginLeft: -2.5,
        fontFamily: LeagueSpartanFont.Thin,
        color: COLORS.primary.main,

    },
    iconcontainer:{
        flexDirection: 'row',
        right: -20,
        justifyContent:'flex-end',
        top: 5,
        gap: 20,
        left: 40,
    },
    imgtext:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        marginLeft: 10,
        left: 12,
    },
    icon:{
        backgroundColor: COLORS.primary[300],
        borderRadius: 50,
        // height: 40,
        // width: 40,
        // marginTop: -10,
    },
    nameText: {
        fontSize: 25,
        fontFamily: LeagueSpartanFont.SemiBold,
        marginTop: -10,
        marginLeft: -2,
        color: COLORS.common.black,
    },
    textcontainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        
      },
});



export default HeadBar;