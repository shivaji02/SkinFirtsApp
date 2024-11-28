import React, { ReactNode } from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { FontStyle } from '../../theme/fontStyle';
import { COLORS } from '../../theme/colors';
import { SvgProps } from 'react-native-svg';
// import { widthPercentageToDP } from '../../utils/responsiveUtils';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: object;
  inputStyle?: object;
  labelStyle?: object;
  errorStyle?: object;
  SvgIcon?: React.FC<SvgProps>;
  onIconPress?: () => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  error,
  containerStyle,
  inputStyle,
  labelStyle,
  errorStyle,
  SvgIcon,
  onIconPress,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, inputStyle, error ? styles.inputError : null]}
          placeholderTextColor={COLORS.primary[200]}
          {...props}
        />
        {SvgIcon && (
          <TouchableOpacity onPress={onIconPress} style={styles.iconWrapper}>
              <SvgIcon width={25} height={24} />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  label: {
    ...FontStyle({ color: COLORS.common.black, fontsize: 20, fontFamily: 'Medium', lineHeight: 18.4 }),
  },
  inputWrapper: {
    flexDirection: 'row',
    backgroundColor: COLORS.primary[100],
    borderRadius: 13,
    paddingHorizontal: 12,
    justifyContent:'center',
    // alignContent:'center',
    alignItems:'center',
  },
  input: {
    flex: 1,
    height: 45,
    ...FontStyle({ color: COLORS.primary[200], fontsize: 20, fontFamily: 'Regular', lineHeight: 18.4 }),
    // justifyContent:'center'
  },
  iconWrapper: {
    justifyContent:'center',
    // alignItems:'center',
    // backgroundColor:'white'
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    marginTop: 4,
    fontSize: 14,
    color: 'red',
  },
});

export default CustomTextInput;
