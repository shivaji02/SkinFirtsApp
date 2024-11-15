import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { CustomIconProps } from '../../types/index';

const CustomIcon: React.FC<CustomIconProps> = ({
  IconComponent,
  size = 24,
  onPress,
  style,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.iconContainer, style]}>
      <IconComponent width={size} height={size} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomIcon;