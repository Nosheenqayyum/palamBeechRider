import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { SIZES, COLORS, height, FONTFAMILY, IMAGES } from "../constants/theme";
import InputText from "./TextInput";

export default function DefaultImageView(props) {
  return (
    <ImageBackground
      source={IMAGES.backgroundDefault}
      resizeMode="stretch"
      style={styles.image}
    >

      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: 15,
    // flex: 1,
    height: height * 0.6,
  },
  signButton: {
    position: "absolute",
    top: -SIZES.twenty - 20,
    left: SIZES.fifteen + 7,
    width: 160,
    height: 160,
  },
  signinButton: {
    alignSelf: "flex-end",
    position: "absolute",
    right: '31%',
    top: -25,
    width: 140,
    height: 140,
  },
  signButtonTxt: {
    textAlign: "center",
    top: SIZES.twenty,
    color: COLORS.secondary,
    fontFamily: FONTFAMILY.Medium,
  },
});
