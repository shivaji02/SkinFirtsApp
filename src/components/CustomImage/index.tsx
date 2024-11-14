import React from 'react';
import { Image, ImageProps, StyleSheet, View, ActivityIndicator } from 'react-native';
import { CustomImageProps } from '../../types/index';
const CustomImage: React.FC<CustomImageProps> = ({
  height,
  width,
  borderRadius,
  source,
  style,
  ...props
}) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <View style={[styles.container, { height, width, borderRadius }]}>
      {loading && (
        <ActivityIndicator
          style={styles.loading}
          size="small"
          color="#0000ff"
        />
      )}
      <Image
        source={source}
        style={[
          styles.image,
          { height, width, borderRadius },
          style,
        ]}
        onLoadEnd={() => setLoading(false)}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    resizeMode: 'cover',
  },
  loading: {
    position: 'absolute',
  },
});

export default CustomImage;