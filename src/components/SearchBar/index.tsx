import React from 'react';
import { View, TextInput, StyleSheet, DimensionValue } from 'react-native';
import CustomIcon from '../CustomIcon'; // Ensure you have the CustomIcon component
import { SearchBarProps } from '../../types/index';

const SearchBar: React.FC<SearchBarProps> = ({
  height = 40,
  width = '100%',
  bgColor = '#fff',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconSize = 24,
  rightIconSize = 24,
  leftIconStyle,
  rightIconStyle,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor, height, width: width as DimensionValue }, style]}>
      {LeftIcon && <CustomIcon IconComponent={LeftIcon} size={leftIconSize} style={StyleSheet.flatten([styles.leftIcon, leftIconStyle])} />}
      <TextInput
        style={[styles.input, { height }]}
        {...props}
      />
      {RightIcon && <CustomIcon IconComponent={RightIcon} size={rightIconSize} style={StyleSheet.flatten([styles.rightIcon, rightIconStyle])} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 10,
  },
});

export default SearchBar;