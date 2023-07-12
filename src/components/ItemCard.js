import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyTouchableOpacity from './MyTouchableOpacity';
import {COLORS, FONTS, SIZES} from '../constants';
import Icon, {Icons} from './Icons';

export default function ItemCard(props) {
  const {label, iconType, iconName, onPress, rightIcon, containerStyle, dark} =
    props;
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <MyTouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      onPressIn={() => setSelectedCard(label)}
      onPressOut={() => setSelectedCard(null)}
      style={[styles.itemStyle, containerStyle]}>
      <View style={{flex: 0.2, alignItems: 'center'}}>
        <Icon
          type={iconType}
          name={iconName}
          style={{
            fontSize: SIZES.twentyFive,
            color: COLORS.black,
          }}
        />
      </View>

      <View style={{flex: 1, marginLeft: SIZES.ten}}>
        <Text
          style={[
            FONTS.mediumFont16,
            {
              color: COLORS.black,
            },
          ]}>
          {label}
        </Text>
      </View>

      {rightIcon && (
        <Icon
          type={Icons.MaterialIcons}
          name="keyboard-arrow-right"
          style={{
            fontSize: SIZES.twentyFive,
            color: COLORS.black,
          }}
        />
      )}
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.fifteen,
    paddingHorizontal: SIZES.ten,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
