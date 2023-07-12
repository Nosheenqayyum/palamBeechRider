import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { SIZES, COLORS, height, FONTFAMILY, IMAGES } from "../constants/theme";
import InputText from "./TextInput";

export default function CenterImageView(props) {
  return (
    <ImageBackground
      source={IMAGES.backgroundCenter}
      resizeMode="stretch"
      style={styles.image}
    >
      <ImageBackground
        style={styles.signinButton}
        source={IMAGES.SignButton}
        resizeMode="cover"
      >

        <Text style={styles.signButtonTxt}>{props.number} gal</Text>

      </ImageBackground>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: height * 0.15,
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
