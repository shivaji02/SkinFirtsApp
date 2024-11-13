import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { CustomImageProps } from '../../types';

export const CustomImage = ({ source, size = 100, onLoad, borderRadius = 0 }: CustomImageProps) => {
  const imageSource = typeof source === 'string' ? { uri: source } : source;

  return (
    <Image
      source={imageSource}
      style={[styles.image, { width: size, height: size, borderRadius }]}
      onLoad={onLoad}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  },
});

export default CustomImage;
