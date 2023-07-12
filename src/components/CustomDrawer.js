import * as React from 'react';
import {
  Animated,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import AntDesign from 'react-native-vector-icons/AntDesign';

// import MaskedView from '@react-native-community/masked-view';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import { COLORS, FONTFAMILY, FONTS, IMAGES, SCREENS, SIZES } from '../constants';

import MaskedView from '@react-native-masked-view/masked-view';
import MyTouchableOpacity from './MyTouchableOpacity';
import moment from 'moment';
import Row from './Row';
// import Logout from './modal/Logout';
import { CommonActions } from '@react-navigation/native';

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);
const AnimatedMaskedView = Animated.createAnimatedComponent(MaskedView);

const { width, height } = Dimensions.get('window');
const fromCoords = { x: 0, y: height };
const toCoords = { x: width, y: 0 };

const Button = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function CustomDrawer({ navigation, selectedRoute, routes }) {
  const isDrawerOpened = useIsDrawerOpen();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = React.useState(false);
  const polygonRef = React.useRef();
  const animatedWidth = React.useRef(new Animated.Value(0)).current;
  const animation = React.useRef(new Animated.ValueXY(fromCoords)).current;

  const resetActions = CommonActions.reset({
    index: 0,
    routes: [{ name: SCREENS.Login }],
  });

  const animate = toValue => {
    const animations = [
      Animated.spring(animation, {
        toValue: toValue === 1 ? toCoords : fromCoords,
        useNativeDriver: true,
        bounciness: 2,
        speed: 10,
      }),
      Animated.timing(animatedWidth, {
        toValue: toValue === 1 ? width : 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ];

    return Animated.sequence(toValue === 1 ? animations.reverse() : animations);
  };

  React.useEffect(() => {
    const listener = animation.addListener(v => {
      if (polygonRef?.current) {
        polygonRef.current.setNativeProps({
          points: `0,0 ${v.x}, ${v.y} ${width}, ${height} 0, ${height}`,
        });
      }
    });

    return () => {
      animation.removeListener(listener);
    };
  });

  React.useEffect(() => {
    animate(isDrawerOpened ? 1 : 0).start();
  }, [isDrawerOpened]);

  const opacity = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [0, 1],
  });

  const translateX = animation.x.interpolate({
    inputRange: [0, width],
    outputRange: [-50, 0],
  });

  const onRoutePress = React.useCallback(route => {
    navigation.navigate(route);
    setTimeout(() => {
      navigation.closeDrawer();
    }, 500);
    // navigation.closeDrawer();
  }, []);

  const onCloseDrawer = React.useCallback(route => {
    navigation.closeDrawer();
  }, []);

  return (
    <AnimatedMaskedView
      style={[styles.maskedContainer, { width: animatedWidth }]}
      maskElement={
        <Svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{ backgroundColor: 'transparent' }}>
          <AnimatedPolygon
            ref={polygonRef}
            points={`0,0 ${fromCoords.x}, ${fromCoords.y} ${width}, ${height} 0, ${height}`}
            // points={`0,0 ${toCoords.x}, ${toCoords.y} ${width}, ${height} 0, ${height}`}
            fill="blue"
          />
        </Svg>
      }>
      <View style={styles.menuContainer}>
        <AntDesign
          onPress={onCloseDrawer}
          name="close"
          size={32}
          color="black"
          style={{ position: 'absolute', top: 40, right: 30 }}
        />
        <Animated.View
          style={[styles.menu, { opacity, transform: [{ translateX }] }]}>
          <Row style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
            <Image
              source={IMAGES.Profile}
              resizeMode="contain"
              style={{
                height: width * 0.2,
                width: height * 0.1,
                alignSelf: 'center',
              }}
            />
            <View style={{ marginStart: SIZES.ten }}>
              <Text
                style={[
                  {
                    fontFamily: FONTFAMILY.Bold,
                    fontSize: SIZES.twenty,
                    color: COLORS.BLACK,
                  },
                ]}>
                {'Mr. John Deen'}
              </Text>
              <Text
                style={[
                  {
                    fontFamily: FONTFAMILY.Medium,
                    fontSize: SIZES.fifteen,
                    color: COLORS.BLACK,
                  },
                ]}>
                {moment().format('LL')}
              </Text>
            </View>
          </Row>
          <View
            style={{
              flex: 1,
              paddingTop: SIZES.twenty,
            }}>
            {[
              { screen: SCREENS.Notifications, name: 'Notifications' },
              { screen: SCREENS.MyOrders, name: 'My Orders' },
              { screen: SCREENS.MyVessel, name: 'My Vessel' },
              { screen: SCREENS.Wallet, name: 'Wallet' },
              { screen: SCREENS.Addresses, name: 'Addresses' },
              { screen: SCREENS.TermsConditions, name: 'Terms & Conditions' },
              { screen: SCREENS.Settings, name: 'Settings' },
              { screen: SCREENS.Support, name: 'Support' },
              { screen: SCREENS.Support, name: 'Logout' },
            ].map((route, index) => {
              return (
                <Button
                  key={`drawerItem${index}`}
                  title={route.name}
                  style={[
                    styles.button,
                    {
                      // textDecorationLine:
                      //   route === selectedRoute ? 'line-through' : 'none',
                      color: COLORS.BLACK,
                    },
                  ]}
                  onPress={() => {
                    if (route.name === 'Logout') {
                      // onRoutePress('logout');
                      // setTimeout(())
                      setIsLogoutModalVisible(true);
                      return;
                    }
                    onRoutePress(route.screen);
                  }}
                />
              );
            })}
          </View>

          <MyTouchableOpacity disabled style={{ opacity: 0 }}>
            {links.map((link, index) => {
              return (
                <Button
                  key={link}
                  title={link}
                  style={[
                    styles.buttonSmall,
                    // {color: colors[index + routes.length + 1]},
                  ]}
                //   onPress={onCloseDrawer}
                />
              );
            })}
          </MyTouchableOpacity>
        </Animated.View>
      </View>
      {/* <Logout
        isVisible={isLogoutModalVisible}
        onConfirm={() => {
          setIsLogoutModalVisible(false);
          setTimeout(() => {
            navigation.dispatch(resetActions);
          }, 400);
        }}
        onCancel={() => {
          setIsLogoutModalVisible(false);
        }}
      /> */}
    </AnimatedMaskedView>
  );
}

const styles = StyleSheet.create({
  maskedContainer: {
    flex: 1,
  },
  menuContainer: {
    flex: 1,
    // backgroundColor: '#222eee'
    backgroundColor: COLORS.white,
    paddingTop: 80,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  menu: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  button: [
    FONTS.mediumFont14,
    {
      // fontSize: SIZES.twenty,
      color: COLORS.BLACK,
      lineHeight: SIZES.twentyFive * 1.5,
    },
  ],
  buttonSmall: {
    // fontSize: SIZES.fifteen,
    marginBottom: 5,
    color: COLORS.BLACK,
  },
});

const links = ['Follow us', 'Quota', 'Awesome link'];
