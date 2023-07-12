import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, SIZES} from '../constants';

export default function RowText({title, value}) {
  return (
    <View>
      <Text style={styles.txt}>
        {title}
        <Text
          style={[
            styles.txt,
            {color: COLORS.secondary, textTransform: 'capitalize'},
          ]}>
          {value}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.BLACK,
    fontSize: SIZES.body14,
    marginBottom: SIZES.ten,
  },
});
