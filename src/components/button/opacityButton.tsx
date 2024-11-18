import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Indicator } from '../activityIndicator/indicator';
import { FontStyle } from '../../theme/fontStyle';
import { COLORS } from '../../theme/colors';

interface OpacityButtonProps {
  text: string; // Text to display on the button
  onPress: () => void; // Function to call when the button is pressed
  isLoading?: boolean; // Loading state to show the Indicator
  disabled?: boolean; // Disabled state
  buttonStyle?: ViewStyle; // Custom button styles
  textStyle?: TextStyle; // Custom text styles
}

export const OpacityButton: React.FC<OpacityButtonProps> = ({
  text,
  onPress,
  isLoading = false,
  disabled = false,
  buttonStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <Indicator />
      ) : (
        <Text style={[styles.text, textStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary.main,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height:45
  },
  text: {
    ...FontStyle({ color: COLORS.common.white, fontsize: 24, fontFamily: 'Medium', lineHeight: 22.08 })
  },
});
