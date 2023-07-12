import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import React from "react";
import { SIZES, COLORS, height, FONTFAMILY, IMAGES } from "../constants/theme";
import InputText from "./TextInput";

export default function RightImageView(props) {
  return (
    <ImageBackground
      source={IMAGES.backgroundSignUp}
      resizeMode="stretch"
      style={styles.image}
    >
      <ImageBackground
        style={styles.signinButton}
        source={IMAGES.SignButton}
        resizeMode="cover"
      >
        <Text style={styles.signButtonTxt}>{props.title}</Text>
      </ImageBackground>
      {props.children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    marginHorizontal: 15,
    // flex: 1,
    height: height * 0.68,
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
    right: SIZES.fifteen + 5,
    top: -SIZES.twenty - 20,
    width: 160,
    height: 160,
  },
  signButtonTxt: {
    textAlign: "center",
    top: SIZES.twenty,
    color: COLORS.secondary,
    fontFamily: FONTFAMILY.Medium,
  },
});
