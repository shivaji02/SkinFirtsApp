import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { CustomIconProps } from '../../types/index';

const CustomIcon: React.FC<CustomIconProps> = ({
  IconComponent,
  size = 24,
  onPress,
  style,
  backgroundColor = 'transparent', // Default background color
  iconColor,
  padding
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iconContainer, { backgroundColor, padding }, style]}>
      <IconComponent width={size} height={size} color={iconColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
  },
});

export default CustomIcon;
