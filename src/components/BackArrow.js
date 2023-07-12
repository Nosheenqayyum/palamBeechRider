import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import { COLORS, FONTFAMILY, SIZES, width } from '../constants';
import { useNavigation } from '@react-navigation/native';

import Icon, { Icons } from './Icons';

export default function BackArrow(props) {
  const navigation = useNavigation();

  return (
    <MyTouchableOpacity
      // style={{
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   borderWidth: 1,
      //   borderRadius: width,
      //   height: 40,
      //   width: 40,
      //   borderColor: COLORS.white,
      // }}
      // style={[
      //   styles.circularBG,
      //   {
      //     backgroundColor: COLORS.transparent,
      //     borderColor: COLORS.white,
      //   },
      //   props.style,
      // ]}
      onPress={() => {
        navigation.goBack();
      }}>
      {/* <Icon
        type={Icons.Ionicons}
        name={'chevron-back'}
        size={SIZES.twentyFive}
        color={COLORS.white}
      /> */}
      <Icon
        type={Icons.Ionicons}
        name={'ios-chevron-back-sharp'}
        style={{
          color: COLORS.black,
          fontSize: SIZES.twentyFive,
        }}
      />
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circularBG: {
    height: SIZES.fifty * 0.7,
    width: SIZES.fifty * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: width,
  },
});
