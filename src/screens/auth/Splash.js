import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  width,
} from '../../constants/theme';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../../components/CustomHeader';
const Splash = ({navigation}) => (
  <View style={styles.container}>
    <StatusBar
      barStyle="light-content"
      backgroundColor={'transparent'}
      translucent={true}
    />

    <ImageBackground source={IMAGES.splashBG} style={styles.image}>
      <Image source={IMAGES.splashWheel} style={styles.wheelImage} />
      <Image source={IMAGES.splashText} style={styles.txtImage} />

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          padding: SIZES.fifteen,
        }}>
        <Image
          source={IMAGES.logo}
          resizeMode="contain"
          style={{
            height: width * 0.7,
            width: height * 0.7,
            alignSelf: 'center',
          }}
        />
        <View
          style={{
            marginVertical: SIZES.twentyFive,
            paddingBottom: 150,
          }}>
          <Text style={styles.text}>Marine Fuel</Text>
          <Text style={styles.textsecondary}>Rider</Text>

          <Text style={{color: COLORS.BLACK, fontSize: SIZES.body18}}>
            Lorem ipsum dicolra amit sed, consetatir eluii sed
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.getStarted}
          onPress={() => navigation.navigate(SCREENS.Login)}>
          <Text style={FONTS.boldFont22}>Get Started</Text>
          <Icon name="arrow-right-thin" size={40} color="#000" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: COLORS.black,
    fontSize: SIZES.h24 * 2.45,
    fontFamily: FONTFAMILY.Bold,
    textAlign: 'left',
    lineHeight: 60,
  },
  textsecondary: {
    color: COLORS.white,
    fontSize: SIZES.h24 * 2.45,
    fontFamily: FONTFAMILY.Bold,
    textAlign: 'left',
    lineHeight: 60,
  },
  getStarted: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginVertical: SIZES.twenty,
  },
  textborder: {
    color: COLORS.black,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'left',
    lineHeight: 40,
  },
  wheelImage: {
    flex: 1,
    position: 'absolute',
    right: 100,
    top: 30,
  },
  txtImage: {
    flex: 1,
    position: 'absolute',
    right: -30,
    top: 60,
  },
});

export default Splash;