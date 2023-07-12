import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import Icon, {Icons} from './Icons';
import {FONTS, SIZES, COLORS, width} from '../constants';
import utils from '../utils';
import Card from './Card';
//import('react-native').TextInputProps

export default function InputText(props: TextInputProps) {
  const {
    email,
    value,
    hasIcon,
    iconType,
    iconName,
    password,
    style,
    required = true,
    multiline,
    placeholder,
  } = props;

  const [focused, setFocused] = useState(false);
  const [secureText, setSecureText] = useState(true);
  const [secureTextIcon, setSecureTextIcon] = useState('eye-slash');
  const [iconColor, setIconColor] = useState(COLORS.brownGrey);
  const [borderColor, setBorderColor] = useState(COLORS.charcoalGrey);

  const showPassword = () => {
    if (secureTextIcon === 'eye') {
      setSecureTextIcon('eye-slash');
      setSecureText(true);
    } else {
      setSecureTextIcon('eye');
      setSecureText(false);
    }
  };

  const validate = () => {
    if (utils.isEmptyOrSpaces(value)) {
      return false;
    } else if (email && !utils.validateEmail(value)) {
      return false;
    } else {
      return true;
    }
  };

  const errorMsg = () => {
    if (utils.isEmptyOrSpaces(value)) {
      return 'This field is required!';
    } else if (email && !utils.validateEmail(value)) {
      return 'Invalid email!';
    } else {
      return '';
    }
  };

  return (
    <>
      <View style={{marginTop: SIZES.fifteen}}>
        {placeholder ? (
          <Text style={{color: iconColor, marginLeft: 10, marginBottom:SIZES.ten}}>{placeholder}</Text>
        ) : null}
        <View style={[styles.container, style]}>
          <View style={styles.flexRow}>
            <View style={[{flex: 1}, styles.flexRow]}>
              {hasIcon ? (
                <View style={{flex: 0.1}}>
                  <Icon
                    type={iconType}
                    name={iconName}
                    style={{
                      color: iconColor,
                      fontSize: SIZES.twenty,
                    }}
                  />
                </View>
              ) : null}

              <TextInput
                {...props}
                selectionColor={COLORS.primary}
                placeholderTextColor={iconColor}
                secureTextEntry={password ? secureText : false}
                style={[FONTS.mediumFont14, styles.txtInputStyle]}
                multiline={multiline}
                onFocus={() => {
                  setFocused(true);
                  setIconColor(COLORS.secondary);
                  setBorderColor(COLORS.secondary);
                }}
                onBlur={() => {
                  setFocused(false);
                  setIconColor(COLORS.brownGrey);
                  setBorderColor(COLORS.brownGrey);
                }}
              />
            </View>

            {password ? (
              <TouchableOpacity
                activeOpacity={0.85}
                activeOpacity={0.85}
                onPress={showPassword}
                style={{flex: 0.1, alignItems: 'flex-end'}}>
                <Icon
                  name={secureTextIcon}
                  type={Icons.FontAwesome}
                  style={styles.eyeIconStyle}
                />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>

        {focused && required && !validate() && (
          <Text style={[FONTS.mediumFont10, styles.errorTextStyle]}>
            {errorMsg()}
          </Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 55,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: SIZES.ten,
    borderRadius: SIZES.ten,
    backgroundColor: '#F0F3F5',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtInputStyle: {
    flex: 1,
    height: 55,
    color: COLORS.secondary,
  },
  eyeIconStyle: {
    fontSize: SIZES.twenty,
    color: COLORS.brownGrey,
    padding: 5,
  },
  errorTextStyle: {
    color: 'red',
    marginTop: SIZES.five,
    marginHorizontal: SIZES.twenty,
  },
});
