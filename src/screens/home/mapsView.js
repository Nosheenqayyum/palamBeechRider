import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BackArrow from '../../components/BackArrow';
import {COLORS, FONTS, SIZES, height, width} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomHeader from '../../components/Header';

export default function mapsView() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
      <CustomHeader showBackButton />

      <View style={styles.bottomCard}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.ten,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="map-marker-outline"
                size={20}
                color={COLORS.primary}
              />
            </View>

            <Text
              style={[
                FONTS.mediumFont16,
                {
                  color: COLORS.brownGrey,
                  marginLeft: SIZES.ten,
                  lineHeight: height * 0.025,
                  maxWidth: width * 0.6,
                },
              ]}>
              1234 Palm Beach, FL 33480, USA
            </Text>
          </View>

          <View
            style={{
              padding: 10,
              backgroundColor: COLORS.textInput,
              borderRadius: SIZES.ten,
            }}>
            <Icon name="map-marker-outline" size={20} color={COLORS.primary} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  bottomCard: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: height * 0.13,
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.ten,
  },
});
