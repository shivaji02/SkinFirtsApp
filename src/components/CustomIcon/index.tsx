import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { CustomIconProps } from '../../types/index';
import {scale,verticalScale,widthPercentageToDP,heightPercentageToDP} from '../../utils/responsiveUtils';
import {COLORS} from '../../theme/colors';


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
    height: heightPercentageToDP(5),
    width: widthPercentageToDP(5),
    borderRadius:50,
    },
  icon:{
    height: 50,
    width: 50,
     top: 5,
    // borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',

},
  text: {
    top: scale(5),
    textAlign: 'center',
    justifyContent:'center',
    width :widthPercentageToDP(7) ,
    height : verticalScale(20),
    marginHorizontal:widthPercentageToDP(-1),
    color : COLORS.primary.main,
  },
});

export default CustomIcon;
