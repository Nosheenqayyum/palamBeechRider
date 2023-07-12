import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import {COLORS, FONTFAMILY, FONTS, SIZES} from '../constants';

export default function MessageEditText(props: TextInputProps) {
  const [borderColor, setBorderColor] = React.useState(COLORS.grey);
  const {value, onChangeText, placeholder} = props;
  return (
    <View
      style={[
        props.style,
        {
          backgroundColor: COLORS.grey,
          paddingHorizontal: SIZES.fifteen,
          borderRadius: SIZES.ten,
        },
      ]}>
      <TextInput
        editable={false}
        secureTextEntry={false}
        placeholderTextColor={COLORS.black}
        autoCapitalize="none"
        blurOnSubmit={true}
        onFocus={() => setBorderColor(COLORS.primary)}
        onBlur={() => setBorderColor(COLORS.blackWithOpacity)}
        selectionColor={COLORS.primary}
        placeholder={placeholder}
        keyboardType={'default'}
        value={value}
        onChangeText={onChangeText}
        style={[
          styles.textInput,
          FONTS.mediumFont12,
          {
            paddingTop: SIZES.ten * 1.3,
          },
          props.textStyles,
        ]}
        multiline={true}
        numberOfLines={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: SIZES.ten * 17,
    // fontSize: SIZES.fifteen - 1,
    //width: SIZES.twentyFive,
    textAlignVertical: 'top',
    color: COLORS.black,
    fontFamily: FONTFAMILY.Medium,
  },
  iconPassword: {
    fontSize: SIZES.twenty,
    height: SIZES.twenty,
    width: SIZES.twenty,
    color: COLORS.white,
  },
});
