import React from 'react';
import { View, TextInput, StyleSheet, ViewStyle, TextInputProps } from 'react-native';
import CustomIcon from '../CustomIcon'; // Ensure you have the CustomIcon component
import { SvgProps } from 'react-native-svg';
import {SearchBarProps}   from '../../types/index';
const SearchBar: React.FC<SearchBarProps> = ({
  bgColor = '#fff',
  height = 40,
  width = '100%',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftIconSize = 24,
  rightIconSize = 24,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, { backgroundColor: bgColor, height, width }, style]}>
      {LeftIcon && <CustomIcon IconComponent={LeftIcon} size={leftIconSize} style={styles.leftIcon} />}
      <TextInput
        style={[styles.input, { height }]}
        {...props}
      />
      {RightIcon && <CustomIcon IconComponent={RightIcon} size={rightIconSize} style={styles.rightIcon} />}
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