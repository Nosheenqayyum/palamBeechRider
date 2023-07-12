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
import OTPInputView from '@twotalltotems/react-native-otp-input';



export default function Verification({navigation}) {
  const [code, setCode] = useState('');


  const TitleButton = ({title, onPress, style}) => {
    return (
      <TouchableOpacity activeOpacity={0.85} onPress={onPress} style={style}>
        <Text style={[FONTS.mediumFont14, {color: COLORS.BLACK}]}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <CustomScrollView
      >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <SafeAreaView>
        <BackArrow />
        <View style={{paddingBottom: 50}}></View>
        <RightImageView title="Verify">
              <TitleButton
                title={'Forgot'}
                style={styles.signUpTitle}
              />
              <View style={{paddingTop: 60}}>


              <View style={{marginHorizontal: 10, marginVertical: 20}}>
                <Text style={[FONTS.boldFont24,{color:COLORS.black}]}>Verification</Text>
                <Text style={{color: COLORS.brownGrey, marginTop: SIZES.ten}}>
Enter the 4 digit code sent to your email address.
                </Text>
              </View>

              <OTPInputView
                style={{
                  width: '90%',
                  height: 80,
                  alignSelf: 'center',
                  marginBottom: 110,
                }}
                pinCount={4}
                code={code}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                onCodeChanged={code => setCode(code)}
                autoFocusOnLoad
                secureTextEntry
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => {}}
              />
      
  
                <View style={{paddingTop: 40}}>
                  <CustomButton title="Continue" 
                  onPress={() => navigation.navigate(SCREENS.ResetPassword)}
                  />
                </View>
              </View>
            </RightImageView>
      </SafeAreaView>
    </CustomScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: height * 0.1,

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
  underlineStyleBase: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#A4A3A3',
    borderRadius: 7,
    backgroundColor: '#F0F3F5',
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.secondary,
  },
});
