import React from 'react';
import {  StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { back } from '../../assets/svg/actions';
import CustomIcon from '../CustomIcon';

const HeadBack = ({ title, showIcon }: { title: string, showIcon: boolean }) => {
  const navigation = useNavigation();

    const handleBack = ()=>{
        navigation.goBack();
        console.log("Navgation go back pressed");
    };
  return (

    <CustomIcon IconComponent={back} onPress={handleBack} style={styles.backIcon}/>
  );
};

const styles = StyleSheet.create({
backIcon:{
    flexDirection:'row',
},
});

export default HeadBack;
