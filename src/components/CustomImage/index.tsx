import React,{useState} from 'react';
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import { CustomImageProps } from '../../types/index';

const CustomImage: React.FC<CustomImageProps> = ({
  height,
  width,
  borderRadius,
  source,
  style,
  ...props
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <View
      style={[
        styles.container,
        { height: height || 'auto', width: width || 'auto', borderRadius: borderRadius || 0 },
      ]}
    >
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
          { height: height || 'auto', width: width || 'auto', borderRadius: borderRadius || 0 },
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
