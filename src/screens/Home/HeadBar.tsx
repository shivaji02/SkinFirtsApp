import React from 'react';
import { View, Text, StyleSheet,Platform } from 'react-native';
import  CustomImage  from '../../components/CustomImage';
import { personalDetails } from '../../data/PersonalDetails';
import { LeagueSpartanFont } from '../../theme/fontStyle';
import { COLORS } from '../../theme/colors';
import CustomIcon from '../../components/CustomIcon';


import { NoticationBellIcon, SettingIcon } from '../../assets/svg/HomeScreensvg';
const HeadBar = () => {
    console.log('HomeScreen.tsx');
  return (
    <View style={styles.container}>
      <CustomImage
        source={require('../../assets/png/HomeScreenpng/profileimage.png')}
        height={60}
        width={60}
        borderRadius={100}
        // style={styles.image}
        
      />
      <View  style =  {styles.textcontainer}>
    <Text style={[styles.text, styles.welcomeText]}>Hi, WelcomeBack</Text>
    <Text style={[styles.text,styles.nameText]}>{personalDetails.name}</Text>
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: -50,
    marginRight: -50,
    ...(Platform.OS === 'ios' &&  {
        marginTop: 45, // Apply marginTop only for iOS 10
      }),
    },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: LeagueSpartanFont.ExtraLight,
    lineHeight: 25,
  },
    // image: {
    //     marginTop: 10,
    //     marginLeft: 10,
    //     marginRight: 10,
    // },
    welcomeText: {
        fontSize: 20,
        fontFamily: LeagueSpartanFont.Bold,
        color: COLORS.primary.dark,

    },
    iconcontainer:{
        flexDirection: 'row',
        // alignItems: 'center',
        // position: 'absolute',
        // right: 20,
        justifyContent:'flex-end',
        top: 13,
        gap: 10,
        marginLeft: 30,
    },
    icon:{
        backgroundColor: COLORS.primary[300],
        borderRadius: 50,
        height: 40,
        width: 40,

    },
    nameText: {
        fontSize: 25,
        fontFamily: LeagueSpartanFont.Bold,
        marginTop: -10,
        marginLeft: -7,
        color: COLORS.common.black,
    },
    textcontainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
});



export default HeadBar;