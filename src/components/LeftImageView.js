/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {SIZES, COLORS, height, FONTFAMILY, IMAGES} from '../constants/theme';

export default function LeftImageView(props) {
  return (
    <ImageBackground
      source={IMAGES.backgroundSign}
      resizeMode="stretch"
      style={styles.image}>
      <ImageBackground
        style={styles.signButton}
        source={IMAGES.SignButton}
        resizeMode="cover">
        <Text style={styles.signButtonTxt}>{props.titletwo}</Text>
      </ImageBackground>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: height * 0.8,
  },
  signButton: {
    position: 'absolute',
    top: -SIZES.twenty - 20,
    left: SIZES.fifteen +5,
    width: 160,
    height: 160,
  },
  signinButton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: SIZES.fifteen + 7,
    top: -SIZES.twenty - 20,
    width: 160,
    height: 160,
  },
  signButtonTxt: {
    textAlign: 'center',
    top: SIZES.twenty,
    color: COLORS.secondary,
    fontFamily: FONTFAMILY.Medium,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F3F5',
    height: 60,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  linearGradient: {
    marginTop: 30,
    marginBottom: 40,

    borderRadius: 8,
    alignSelf: 'center',
    width: '94%',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: FONTFAMILY.Medium,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    margin: 18,
  },
  tinyLogo: {
    width: 180,
    height: 60,
  },
  Logo: {
    width: 60,
    height: 60,
  },
});
