import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {COLORS, IMAGES, width} from '../constants';

export default function CircularImage(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={IMAGES.pictur}
        resizeMode="cover"
        style={props.uri ? styles.image : styles.image2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  image2: {
    height: '80%',
    width: '80%',
  },
  container: {
    borderRadius: width,
    borderWidth: 1,
    borderColor: COLORS.grey,
    overflow: 'hidden',
    width: width * 0.2,
    height: width * 0.2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
