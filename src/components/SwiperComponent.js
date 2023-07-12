// import React, {useState, useRef} from 'react';
// import {StyleSheet, View, Text} from 'react-native';

// import {API, COLORS, FONTS, IMAGES, SCREENS, SIZES, width} from '../constants';

// import Animated, {
//   Extrapolate,
//   interpolate,
//   useAnimatedStyle,
//   useSharedValue,
// } from 'react-native-reanimated';
// import LinearGradient from 'react-native-linear-gradient';

// import Carousel from 'react-native-reanimated-carousel';

// import {useNavigation} from '@react-navigation/native';

// import {Image} from 'react-native';

// export default function SwiperComponents(props) {
//   const progressValue = useSharedValue(0);

//   const [autoPlay, setAutoPlay] = React.useState(true);
//   const [pagingEnabled, setPagingEnabled] = React.useState(true);
//   const [snapEnabled, setSnapEnabled] = React.useState(true);
//   const [isVertical, setIsVertical] = React.useState(false);
//   const baseOptions = isVertical
//     ? {
//         vertical: true,
//         width: width,
//         height: width * 0.45,
//       }
//     : {
//         vertical: false,
//         width: width,
//         height: width * 0.45,
//       };

//   let navigation = useNavigation();

//   const _renderItemWithParallax = (item, index) => {
//     return (
//       <View style={styles.container}>
//         <Text>test</Text>
//       </View>
//     );
//   };

//   return (
//     <View
//       style={{
//         alignItems: 'center',
//         height: width * 0.44,
//         width: width,
//       }}>
//       {props.data.length > 0 ? (
//         <>
//           {props.data.length > 1 ? (
//             <>
//               <Carousel
//                 {...baseOptions}
//                 pagingEnabled={pagingEnabled}
//                 snapEnabled={snapEnabled}
//                 autoPlay={autoPlay}
//                 autoPlayInterval={3000}
//                 onProgressChange={(_, absoluteProgress) =>
//                   (progressValue.value = absoluteProgress)
//                 }
//                 data={props?.data}
//                 renderItem={({item, index}) =>
//                   _renderItemWithParallax(item, index)
//                 }
//               />
//             </>
//           ) : (
//             <>{_renderItemWithParallax(props.data[0], 0)}</>
//           )}
//         </>
//       ) : (
//         <>
//           <View
//             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Image
//               style={{height: width * 0.25, width: width * 0.8}}
//               resizeMode="contain"
//               source={IMAGES.Splidu}
//             />
//           </View>
//         </>
//       )}

//       {!!progressValue && (
//         <View
//           style={
//             isVertical
//               ? {
//                   flexDirection: 'column',
//                   justifyContent: 'space-between',
//                   width: 10,
//                   alignSelf: 'center',
//                   position: 'absolute',
//                   right: 5,
//                   top: 40,
//                 }
//               : {
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   width: width * 0.15,

//                   position: 'absolute',
//                   bottom: SIZES.twentyFive,
//                   left: SIZES.fifteen,
//                 }
//           }>
//           {props.data.length > 1 &&
//             props?.data.map((backgroundColor, index) => {
//               return (
//                 <PaginationItem
//                   backgroundColor={COLORS.primary}
//                   animValue={progressValue}
//                   index={index}
//                   key={index}
//                   isRotate={isVertical}
//                   length={props?.data.length}
//                 />
//               );
//             })}
//         </View>
//       )}
//     </View>
//   );
// }

// const PaginationItem = props => {
//   const {animValue, index, length, backgroundColor, isRotate} = props;
//   const width = 15;

//   const animStyle = useAnimatedStyle(() => {
//     let inputRange = [index - 1, index, index + 1];
//     let outputRange = [-width, 0, width];

//     if (index === 0 && animValue?.value > length - 1) {
//       inputRange = [length - 1, length, length + 1];
//       outputRange = [-width, 0, width];
//     }

//     return {
//       transform: [
//         {
//           translateX: interpolate(
//             animValue?.value,
//             inputRange,
//             outputRange,
//             Extrapolate.CLAMP,
//           ),
//         },
//       ],
//     };
//   }, [animValue, index, length]);

//   return (
//     <View
//       style={[
//         {
//           backgroundColor: COLORS.grey + 45,
//           width,
//           height: width / 2,
//           borderRadius: 5,
//           overflow: 'hidden',
//           marginLeft: SIZES.five,
//         },
//       ]}>
//       <Animated.View
//         style={[
//           {
//             flex: 1,
//           },
//           animStyle,
//         ]}>
//         <LinearGradient
//           start={{x: -0.1, y: 0.5}}
//           end={{x: 1.1, y: 1}}
//           colors={[COLORS.secondary, COLORS.purpal, COLORS.primary]}
//           style={[{flex: 1}]}></LinearGradient>
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: width * 0.44,
//     backgroundColor: 'pink',

//     width: width,
//     overflow: 'hidden',
//   },
//   slider: {
//     // marginTop: 15,
//     overflow: 'visible', // for custom animations
//   },
//   sliderContentContainer: {
//     paddingVertical: 0, // for custom animation
//   },
//   paginationContainer: {
//     position: 'absolute',
//     bottom: SIZES.ten,
//     left: 10,
//     flexDirection: 'row',
//   },
//   paginationDot: {
//     width: SIZES.ten,
//     height: SIZES.ten,
//     borderRadius: 4,
//     marginLeft: SIZES.ten,
//   },
//   dot: {
//     height: SIZES.ten,
//     borderRadius: SIZES.five,
//     backgroundColor: COLORS.primary,
//     marginHorizontal: SIZES.five,
//   },
// });
