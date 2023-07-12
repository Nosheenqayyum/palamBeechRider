import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
  } from 'react-native';
  import {SCREENS, FONTFAMILY, height, FONTS} from '../../constants/theme';
  import React, {useState} from 'react';
  import {SafeAreaView} from 'react-native-safe-area-context';
  import {STYLES} from '../../constants';
  import {SIZES, COLORS} from '../../constants/theme';
  import LeftImageView from '../../components/LeftImageView';
  import RightImageView from '../../components/RightImageView';
  import CustomScrollView from '../../components/CustomScrollView';
  import InputText from '../../components/TextInput';
  import {Icons} from '../../components/Icons';
  import CustomButton from '../../components/CustomButton';
import BackArrow from '../../components/BackArrow';
  


  export default function Login({ navigation }) {
 
const [email, setemail] = useState("")
const [password, setpassword] = useState("")

    const TitleButton = ({title, onPress, style}) => {
      return (
        <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={style}>
          <Text style={[FONTS.mediumFont14, {color: COLORS.BLACK}]}>{title}</Text>
        </TouchableOpacity>
      );
    };
  
    return (
      <CustomScrollView
        style={[STYLES.container, {backgroundColor: '#F7F7F6'}]}
        contentContainerStyle={{marginHorizontal:SIZES.fifteen}}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'transparent'}
          translucent={true}
        />
        <SafeAreaView>
            <BackArrow/>
          <View style={{paddingBottom: 50}}></View>
          <>
            <LeftImageView titletwo="Sign In">


              <View style={{paddingTop: 60}}>
                <InputText
                  placeholder="Email"
                  value={email}
                  onChangeText={setemail}
                  hasIcon
                  iconType={Icons.MaterialCommunityIcons}
                  iconName={'email-outline'}
                
                />

                <InputText
                  password
                  placeholder="Password"
                  value={password}
                  onChangeText={setpassword}
                  hasIcon
                  iconType={Icons.MaterialCommunityIcons}
                  iconName={'lock-outline'}
                />
  
                <TouchableOpacity
                  activeOpacity={0.85}
                  onPress={() => navigation.navigate(SCREENS.ForgetPassword)}
                  style={{paddingLeft: 20, alignSelf: 'flex-end'}}>
                  <Text
                    style={{
                      fontFamily: FONTFAMILY.Medium,
                      right: 15,
                      color: COLORS.BLACK,
                      marginTop: 20,
                      marginBottom: 20,
                    }}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
  
                <CustomButton
                  title="Sign In"
                  // onPress={() => navigation.navigate(SCREENS.DrawerNavigator)}
                  onPress={() => {
                    loginHandler();
                  }}
                />
  
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 30,
                  }}></View>
              </View>
            </LeftImageView>
          </>
  
          {/* <RightImageView title="Sign Up">
              <TitleButton
                title={'Sign In'}
                onPress={() => {
                  settype(true);
                }}
                style={styles.signUpTitle}
              />
              <View style={{paddingTop: 60}}>
                <InputText
                  placeholder="Name"
                  value={name}
                  onChangeText={setname}
                  hasIcon
                  iconType={Icons.Foundation}
                  iconName={'torsos-male-female'}
                />
                <InputText
                  placeholder="Email"
                  value={email}
                  onChangeText={setemail}
                  hasIcon
                  iconType={Icons.MaterialCommunityIcons}
                  iconName={'email-outline'}
                />
                <InputText
                  password
                  placeholder="Password"
                  value={newpassword}
                  onChangeText={setnewpassword}
                  hasIcon
                  iconType={Icons.MaterialCommunityIcons}
                  iconName={'lock-outline'}
                />
                <InputText
                  password
                  placeholder="Confirm Password"
                  value={repassword}
                  onChangeText={setrepassword}
                  hasIcon
                  iconType={Icons.MaterialCommunityIcons}
                  iconName={'lock-outline'}
                />
  
                <View style={{paddingTop: 40}}>
                  <CustomButton title="Sign Up" />
                </View>
              </View>
            </RightImageView> */}
        </SafeAreaView>
      </CustomScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    image: {
      marginHorizontal: 15,
      // flex: 1,
      height: height * 0.8,
    },
    signButton: {
      position: 'absolute',
      top: -SIZES.twenty - 20,
      left: SIZES.fifteen + 7,
      width: 160,
      height: 160,
    },
    signinButton: {
      alignSelf: 'flex-end',
      position: 'absolute',
      right: SIZES.fifteen + 7,
      top: -SIZES.twenty - 20,
      width: 160,
      height: 160,
    },
    signButtonTxt: {
      textTransform: 'uppercase',
      textAlign: 'center',
      top: SIZES.twenty,
      color: COLORS.secondary,
      fontFamily: FONTFAMILY.Medium,
    },
    getStarted: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      marginVertical: SIZES.twenty,
    },
    signTitle: {
      position: 'absolute',
      right: SIZES.twentyFive + 20,
      top: -SIZES.twentyFive - 40,
      padding: 30,
    },
    signUpTitle: {
      position: 'absolute',
      left: SIZES.twentyFive + 20,
      top: -SIZES.twentyFive - 40,
      padding: 30,
    },
    image: {
      marginHorizontal: 15,
      // flex: 1,
      height: height * 0.8,
    },
    signButton: {
      position: 'absolute',
      top: -SIZES.twenty - 20,
      left: SIZES.fifteen + 7,
      width: 160,
      height: 160,
    },
    signinButton: {
      alignSelf: 'flex-end',
      position: 'absolute',
      right: SIZES.fifteen + 7,
      top: -SIZES.twenty - 20,
      width: 160,
      height: 160,
    },
    signButtonTxt: {
      textAlign: 'center',
      top: SIZES.twenty,
      color: COLORS.secondary,
      fontFamily: FONTFAMILY.Medium,
    },
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F0F3F5',
      height: 60,
      borderRadius: 5,
      margin: 10,
      padding: 10,
    },
    linearGradient: {
      marginTop: 30,
      marginBottom: 40,
  
      borderRadius: 8,
      alignSelf: 'center',
      width: '94%',
    },
    buttonText: {
      fontSize: 16,
      fontFamily: FONTFAMILY.Medium,
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: 'transparent',
      margin: 18,
    },
    tinyLogo: {
      width: 180,
      height: 60,
    },
    Logo: {
      width: 60,
      height: 60,
    },
  });