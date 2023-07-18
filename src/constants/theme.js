import {Dimensions, Platform, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const {width, height} = Dimensions.get('window');

/* *************** Colors ********** */
export const COLORS = {
  // base colors
  primary: '#f35820',
  secondary: '#EA585C',
  textInput: '#E9E9E9',

  // normal colors
  black: '#000000',
  BLACK: '#000000',

  grey: '#F0F3F5',
  brownGrey: '#959595',
  facebook: '#0037c1',
  apple: '#262a34',
  google: '#eb4335',
  yellow: '#FFD500',
  // gradients
  gradient: ['#20242b', '#3a3d46'],

  // colors
  crimson: '#860012',
  blackWithOpacity: '#00000080',
  white: '#FFFFFF',
  whiteOpacity: '#FFFFFF80',
  LightwhiteOpacity: '#FFFFFF10',

  transparent: 'transparent',
};

const appTheme = {COLORS};
export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
  Regular: 'Poppins-Regular',
  Medium: 'Poppins-Medium',
  SemiBold: 'Poppins-SemiBold',
  Bold: 'Poppins-Bold',

  Ionicons: 'Ionicons',
  AntDesign: 'AntDesign',
  EvilIcons: 'EvilIcons',
  Entypo: 'Entypo',
  FontAwesome: 'FontAwesome',
  Feather: 'Feather',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Octicons: 'Octicons',
  SimpleLineIcons: 'SimpleLineIcons',
};

/* * Images * */
export const IMAGES = {
  AppLogo: require('../assets/AppLogo.png'),
  splashBG: require('../assets/splashback.png'),
  splashWheel: require('../assets/splashshipwheel.png'),
  splashText: require('../assets/splashtext.png'),
  backgroundSign: require('../assets/backgroundSignin.png'),
  backgroundSignUp: require('../assets/backgroundsecondary.png'),
  SignButton: require('../assets/buttonsignlogin.png'),
  logo: require('../assets/logo.png'),
Profile: require('../assets/profile.png'), 
  

};

/* * Screens * */
export const SCREENS = {
  DrawerNavigator: 'DrawerNavigator',
  BottomTab: 'HomeTabs',
  Splash: 'Splash',
  SignUp: 'SignUp',
  SignIn: 'SignIn',
  Login: 'Login',
  ForgetPassword: 'ForgetPassword',
  Verification: 'Verification',
  ResetPassword: 'ResetPassword',
  Home: 'Home',
  orderDetails: 'orderDetails',
  mapsView: 'mapsView',
  chat: 'chat',
  notifications: 'notifications',
  orders: 'orders',
};

export const SIZES = {
  // global sizes
  five: height * 0.0055,
  ten: height * 0.011,
  fifteen: height * 0.017,
  twenty: height * 0.023,
  twentyWidth: width * 0.05,
  twentyFive: height * 0.03,
  twentyFiveWidth: width * 0.08,
  fifty: height * 0.075,
  fiftyWidth: width * 0.13,

  // font sizes
  h16: width * 0.034,
  h18: width * 0.038,
  h20: width * 0.042,
  h22: width * 0.048,
  h24: width * 0.055,
  body08: width * 0.024,
  body10: width * 0.028,
  body12: width * 0.032,
  body14: width * 0.036,
  body16: width * 0.04,
  body18: width * 0.045,
};

export const FONTS = {
  boldFont16: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h16,
    color: COLORS.BLACK,
  },
  boldFont18: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h18,
    color: COLORS.BLACK,
  },
  boldFont20: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h20,
    color: COLORS.BLACK,
  },
  boldFont22: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h22,
    color: COLORS.BLACK,
  },
  boldFont24: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.h24,
    color: COLORS.BLACK,
  },
  mediumFont10: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body10},
  mediumFont12: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body12},
  mediumFont14: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body14},
  mediumFont16: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body16},
  mediumFont18: {fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body18},
  lightFont08: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body08},
  lightFont10: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body10},
  lightFont12: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body12},
  lightFont14: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body14},
  lightFont16: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body16},
  lightFont18: {fontFamily: FONTFAMILY.Light, fontSize: SIZES.body18},
};

export const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 0 : getStatusBarHeight(true),
    backgroundColor:COLORS.white
  },
  splashLogo: {
    width: SIZES.fifteen * 13,
    height: SIZES.fifteen * 13,
    alignSelf: 'center',
  },
  loginView: {
    flex: 1,
    width: '100%',
    marginTop: SIZES.twenty,
    paddingHorizontal: SIZES.twenty,
  },
  lightText: {
    fontFamily: FONTFAMILY.Light,
  },
  mediumText: {
    fontFamily: FONTFAMILY.Medium,
  },
  boldText: {
    fontFamily: FONTFAMILY.Bold,
  },
  headingText: {
    fontFamily: FONTFAMILY.Bold,
    fontSize: SIZES.twenty + 5,
    color: COLORS.black,
  },
  paragraphText: {
    fontFamily: FONTFAMILY.Medium,
    fontSize: SIZES.fifteen - 1,
    color: COLORS.black,
  },
  drawerItem: {
    paddingHorizontal: SIZES.fifteen + 3,
    paddingVertical: SIZES.fifteen,
    borderRadius: SIZES.fifteen,
  },
  drawerIcon: {
    fontSize: SIZES.fifteen + 10,
  },
  drawerText: {
    fontSize: SIZES.fifteen,
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.black,
    marginHorizontal: SIZES.fifteen - 5,
  },
  horLine: {
    height: 0.3,
    marginVertical: SIZES.fifteen,
    backgroundColor: COLORS.brownGrey,
  },
  CardStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 50,
    borderRadius: SIZES.ten,
    marginHorizontal: SIZES.five / 2,
    paddingHorizontal: SIZES.five / 2,
    marginVertical: SIZES.five * 1.3,
    color: COLORS.black,
    justifyContent: 'space-between',
  },
  CardImage: {
    height: width * 0.1,
    width: width * 0.1,
  },
});

/* * Api Path * */
export const CONSTANTS = {
  OrderNow: 'Order Now',
  ScheduleOrder: 'Schedule Order',
  FuelPolishing: 'Fuel Polishing',
};

export const FIREBASELABELS = {};