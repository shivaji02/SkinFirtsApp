import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { CustomIconProps } from '../../types/index';

const CustomIcon: React.FC<CustomIconProps> = ({
  IconComponent,
  size = 24,
  onPress,
  text,
  style,
  backgroundColor = 'transparent', // Default background color
  iconColor,
  padding
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iconContainer, { backgroundColor, padding }, style]}>
      <IconComponent width={size} height={size} color={iconColor} style ={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius:50,
    },
  icon:{
    height: 50,
    width: 50,
     top: 5,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',

},
  text: {
    marginTop: 4,
    textAlign: 'center',
  },
});

export default CustomIcon;
