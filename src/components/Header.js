import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MyTouchableOpacity from './MyTouchableOpacity';
import Icon, {Icons, IconType} from './Icons';
import BackArrow from './BackArrow';
import {COLORS, FONTS, IMAGES, SCREENS, SIZES, STYLES} from '../constants';

export default function CustomHeader(props) {
  const {
    darkTheme,
    title,
    titleStyle,
    showLogo,
    showBackButton,
    backArrowColor,
    backArrowStyle,
    showMoreIcon,
    showProfilePic,
    showEditIcon,
    editIconColor,
    onEditIconPress,
    showGraphIcon,
    showRightBtn,
    rightBtnTitle,
    onRightBtnPress,
    rightBtnTheme = 'normal',
    light,
    textShadow,
  } = props;
  const navigation = useNavigation();

  return (
    <View style={[styles.container]}>
      <View style={{flex: 0.4}}>
        {showBackButton ? (
          <BackArrow />
        ) : showMoreIcon ? (
          <MyTouchableOpacity
            style={[styles.moreIconView, STYLES.shadow]}
            onPress={() => navigation.toggleDrawer()}>
            <Image
              resizeMode="contain"
              source={IMAGES.moreIcon}
              style={styles.moreIconStyle}
            />
          </MyTouchableOpacity>
        ) : null}
      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        {title ? (
          <Text
            style={[
              FONTS.boldFont22,
              {color: darkTheme ? COLORS.white : COLORS.BLACK},
              titleStyle,
              textShadow && STYLES.textShadow,
            ]}>
            {title}
          </Text>
        ) : showLogo ? (
          <Image
            resizeMode="contain"
            source={IMAGES.notNewHeaderLogo}
            style={styles.logoStyle}
          />
        ) : null}
      </View>

      <View style={{flex: 0.4, alignItems: 'flex-end'}}>
        {showProfilePic ? (
          <MyTouchableOpacity
            onPress={() => navigation.navigate(SCREENS.Profile)}>
            <Image source={IMAGES.profilePic} style={styles.profilePicStyle} />
          </MyTouchableOpacity>
        ) : showEditIcon ? (
          <MyTouchableOpacity onPress={onEditIconPress}>
            <Icon
              type={Icons.Feather}
              name={'edit'}
              style={{
                color: editIconColor || COLORS.black,
                fontSize: SIZES.twentyFive,
              }}
            />
          </MyTouchableOpacity>
        ) : showGraphIcon ? (
          <MyTouchableOpacity onPress={() => {}}>
            <Icon
              type={IconType.SimpleLineIcons}
              name={'graph'}
              style={{
                color: COLORS.white,
                fontSize: SIZES.twentyFive * 1.1,
              }}
            />
          </MyTouchableOpacity>
        ) : showRightBtn ? (
          rightBtnTheme === 'dark' ? (
            <MyTouchableOpacity onPress={onRightBtnPress}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.rightBtnStyle}
                colors={[COLORS.secondary, COLORS.primary]}>
                <Text style={[FONTS.mediumFont14, {color: COLORS.white}]}>
                  {rightBtnTitle}
                </Text>
              </LinearGradient>
            </MyTouchableOpacity>
          ) : (
            <MyTouchableOpacity
              style={styles.rightBtnStyle}
              onPress={onRightBtnPress}>
              <Text style={[FONTS.mediumFont14, {color: COLORS.primary}]}>
                {rightBtnTitle}
              </Text>
            </MyTouchableOpacity>
          )
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.fifteen * 1.2,
    paddingHorizontal: SIZES.fifteen,
  },
  logoStyle: {
    width: SIZES.fifty * 3.5,
    height: SIZES.twentyFive * 1.6,
  },
  moreIconStyle: {
    width: SIZES.twenty,
    height: SIZES.twenty,
  },
  profilePicStyle: {
    width: SIZES.twentyFive * 2,
    height: SIZES.twentyFive * 2,
    borderRadius: SIZES.fifty * 2,
  },
  moreIconView: {
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.twentyFive * 2,
    height: SIZES.twentyFive * 2,
    borderRadius: SIZES.fifty * 2,
    backgroundColor: COLORS.white,
  },
  rightBtnStyle: {
    alignSelf: 'flex-end',
    borderRadius: SIZES.ten,
    paddingVertical: SIZES.ten,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.fifteen,
  },
});
