// import React from 'react';
// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {COLORS, FONTFAMILY, SIZES, width} from '../constants';

// export default function CustomButton(props) {
//   const {title, onPress, btnStyle, titleStyle, disabled, hasCard, dark} = props;

//   return (
//     <TouchableOpacity
//       activeOpacity={0.85}
//       style={[
//         btnStyle,
//         hasCard && {
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 5,
//           },
//           shadowOpacity: 0.36,
//           shadowRadius: 6.68,
//           elevation: 10,
//           alignItems: 'center',
//           justifyContent: 'center',
//         },
//       ]}
//       onPress={onPress}
//       disabled={disabled}>
//       <LinearGradient
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}
//         colors={['#F37A20', '#F34920']}
//         style={[styles.container]}>
//         {title && <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>}
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: '95%',
//     height: 55,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: SIZES.ten,
//     paddingHorizontal: SIZES.twentyFive,
//     width: '100%',
//   },
//   titleStyle: {
//     textAlign: 'center',
//     color: COLORS.white,
//     fontSize: SIZES.h20,
//     fontFamily: FONTFAMILY.Medium,
//   },
// });
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTFAMILY, SIZES } from '../constants';

export default function CustomButton(props) {
  const { title, onPress, btnStyle, titleStyle, disabled, hasCard, dark } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async () => {
    setIsLoading(true);
    await onPress();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // wait for 1 second (1000 milliseconds) before setting isLoading to false
  };


  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[
        btnStyle,
        hasCard && {
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 10,
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}
      onPress={handlePress}
      disabled={disabled || isLoading}
    >
      {/* <View style={styles.titleContainer}>
        <Text style={[styles.titleStyle, titleStyle]}>
          {title}
        </Text>
        {isLoading && (
          <ActivityIndicator
            style={styles.loader}
            color={COLORS.white}
            size="small"
          />
        )}
      </View>

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#F37A20', '#F34920']}
        style={[styles.container]}
      >
        <Text style={[styles.titleStyle, titleStyle]}>
          {title}
        </Text>
      </LinearGradient> */}

      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#F37A20', '#F34920']}
        style={[styles.container]}
      >

        {/* {isLoading ? (
          <ActivityIndicator color={COLORS.white} />
        ) : (
          <Text style={[styles.titleStyle, titleStyle]}>
            {title}
          </Text>
        )} */}
        <View style={styles.titleContainer}>

          <Text style={[styles.titleStyle, titleStyle]}>
            {title}
          </Text>
          {isLoading && (
            <ActivityIndicator
              style={styles.loader}
              color={COLORS.white}
              size="small"
            />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {
    marginLeft: 10,
  },
  container: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.ten,
    paddingHorizontal: SIZES.twentyFive,
    width: '100%',
  },
  titleStyle: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: SIZES.h20,
    fontFamily: FONTFAMILY.Medium,
  },


});
