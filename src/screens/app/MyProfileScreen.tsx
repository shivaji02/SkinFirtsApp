import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ActiveProfileIcon, InactiveProfileIcon } from '../../assets/svg/TabBarSvg';

const MyProfileScreen: React.FC = () => {
  const [isProfileActive, setIsProfileActive] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image
          source={require('../../assets/images/Mask_group.png')}
          style={styles.profilePicture}
        />
        <Text style={{ fontSize: 24, fontWeight: '600' }}>John Doe</Text>
      </View>

     
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => {
          console.log('Profile clicked');
          setIsProfileActive(!isProfileActive); 
        }}
      >
        <View style={styles.option}>
            <ActiveProfileIcon width={23} height={23} />
        
          <Text style={styles.optionText}>Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    optionText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default MyProfileScreen;
