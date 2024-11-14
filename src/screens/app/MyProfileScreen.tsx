import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        
        <Image
          source={require('../../assets/images/Mask_group.png')}
          style={styles.profilePicture}
        />
        <Text style={{fontSize:24,fontWeight:'600'}}>John Doe</Text>
      </View>

      
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => console.log('Profile clicked')}
      >
        <View style={styles.option}>
          <Icon name="person" size={24} color="#333" style={styles.icon} />
          <Text style={styles.optionText}>Profile</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#333" />
      </TouchableOpacity>

     
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => console.log('Favourites clicked')}
      >
        <View style={styles.option}>
          <Icon name="favorite" size={24} color="#333" style={styles.icon} />
          <Text style={styles.optionText}>Favourites</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#333" />
      </TouchableOpacity>

      {/* Payment Method Option */}
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => console.log('Payment Method clicked')}
      >
        <View style={styles.option}>
          <Icon name="payment" size={24} color="black" style={styles.icon} />
          <Text style={styles.optionText}>Payment Method</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#333" />
      </TouchableOpacity>

      {/* Settings Option */}
      <TouchableOpacity
        style={styles.optionContainer}
        onPress={() => console.log('Settings clicked')}
      >
        <View style={styles.option}>
          <Icon name="settings" size={24} color="#333" style={styles.icon} />
          <Text style={styles.optionText}>Settings</Text>
        </View>
        <Icon name="chevron-right" size={24} color="#333" />
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
  icon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});

export default MyProfileScreen;