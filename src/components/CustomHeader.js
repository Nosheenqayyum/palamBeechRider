import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MyTouchableOpacity from './MyTouchableOpacity';
import Icon, { Icons, IconType } from './Icons';
import BackArrow from './BackArrow';
import { COLORS, FONTS, IMAGES, SCREENS, SIZES, STYLES } from '../constants';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import utils from '../utils';
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
        rightBtn,
    } = props;
    const navigation = useNavigation();




    return (
        <View style={[styles.container]}>
            <View style={{ flex: 0.4 }}>
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

            <View style={{ flex: 1, alignItems: 'center' }}>
                {title ? (
                    <Text
                        style={[
                            FONTS.mediumFont16,
                            { color: darkTheme ? COLORS.black : COLORS.black },
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

            <View style={{ flex: 0.4, alignItems: 'flex-end' }}>
                {showProfilePic ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate(SCREENS.Profile)}>
                        <Image source={IMAGES.profilePic} style={styles.profilePicStyle} />
                    </TouchableOpacity>
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
                    // ) : showGraphIcon ? (
                    //     <MyTouchableOpacity onPress={onEditIconPress}>
                    //         <Icon
                    //             type={IconType.Feather}
                    //             name={'edit'}
                    //             style={{
                    //                 color: editIconColor || COLORS.black,
                    //                 fontSize: SIZES.twentyFive,
                    //             }}
                    //         />
                    //     </MyTouchableOpacity>
                ) : showGraphIcon ? (
                    <Menu>
                        <MenuTrigger
                            text={

                                <Icon
                                    type={Icons.MaterialCommunityIcons}
                                    name={'dots-vertical'}
                                    style={{
                                        color: editIconColor || COLORS.black,
                                        fontSize: SIZES.twentyFive,
                                    }}
                                />
                            }
                        />

                        <MenuOptions customStyles={optionsStyles}>


                            <MenuOption
                                onSelect={() =>
                                    Alert.alert('Remove', 'Do you really want to remove all notifications', [
                                        {
                                            text: 'NO',
                                            onPress: () => console.log('Cancel Pressed'),
                                            style: 'cancel',
                                        },
                                        {
                                            text: 'Yes, Remove',
                                            onPress: () => deleteNotifications(),
                                        },
                                    ])
                                }>
                                <Text style={[FONTS.mediumFont12, { color: COLORS.red }]}>
                                    Remove All Notifications
                                </Text>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                ) : showRightBtn ? (
                    rightBtn ? (
                        rightBtn()
                    ) : rightBtnTheme === 'dark' ? (
                        <MyTouchableOpacity onPress={onRightBtnPress}>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.rightBtnStyle}
                                colors={[COLORS.secondary, COLORS.primary]}>
                                <Text style={[FONTS.mediumFont14, { color: COLORS.black }]}>
                                    {rightBtnTitle}
                                </Text>
                            </LinearGradient>
                        </MyTouchableOpacity>
                    ) : (

                        <MyTouchableOpacity
                            style={styles.rightBtnStyle}
                            onPress={onRightBtnPress}>
                            <Icon
                                type={Icons.Entypo}
                                name={'dots-three-vertical'}
                                style={{
                                    color: editIconColor || COLORS.black,
                                    fontSize: SIZES.twenty,
                                }}

                            />

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
        paddingVertical: SIZES.fifteen,
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
        //borderRadius: SIZES.ten,
        //paddingVertical: SIZES.ten,
        //  backgroundColor: COLORS.white,
        //paddingHorizontal: SIZES.fifteen,
    },
});

const optionsStyles = {
    // optionsText: {
    //     color: 'white',
    // },
    optionsWrapper: {
        padding: SIZES.five,
    },
    optionsTouchable: {
        underlayColor: 'gray',
        activeOpacity: 70,
    },
};