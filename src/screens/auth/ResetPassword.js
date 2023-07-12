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
  
  
  export default function Verification({navigation}) {
    const [password, setpassword] = useState("")

  
    return (
        <SafeAreaView>
          <BackArrow />
          <View style={{paddingBottom: 50}}></View>

          <View style={styles.container} >
            <Text style={[FONTS.boldFont24,{color:COLORS.black}]}>Reset</Text>
            <Text style={{color: COLORS.brownGrey, marginTop: SIZES.ten}}>
Enter your old password and new password.
            </Text>

            <InputText
                  password
                  placeholder="Enter Old Password"
                  value={password}
                  onChangeText={setpassword}
                  hasIcon
                  iconType={Icons.MaterialCommunityIcons}
                  iconName={'lock-outline'}
                />

<InputText
                  password
                  placeholder="Enter New Password"
                  value={password}
                  onChangeText={setpassword}
                  hasIcon
                  iconType={Icons.MaterialCommunityIcons}
                  iconName={'lock-outline'}
                />

<View style={{paddingTop: height * 0.15}}>
<CustomButton
                  title="Reset Password"
                  onPress={() => navigation.navigate(SCREENS.Login)}

                    />
                    </View>


            </View>
        </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        marginHorizontal: SIZES.fifteen,
        backgroundColor:COLORS.white,
        paddingVertical: SIZES.fifty,
        paddingHorizontal: SIZES.fifteen,
        borderRadius: SIZES.twenty,
        },
  });
  