import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/CustomHeader';
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  width,
} from '../../constants/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../../components/CustomButton';

export default function orderDetails() {
  return (
    <View style={{marginHorizontal: 15}}>
      <CustomHeader showBackButton title="orderDetails" />
      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              Customer{' '}
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SIZES.fifteen,
            }}>
            <Text style={[FONTS.boldFont20, {color: COLORS.BLACK}]}>
              John Doe
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 6,
              backgroundColor: COLORS.primary,
              borderRadius: SIZES.ten,
            }}>
            <Icon name="phone-outline" size={20} color={COLORS.white} />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.ten,
          }}>
          <Icon name="map-marker-outline" size={20} color={COLORS.primary} />
          <Text style={[FONTS.mediumFont16, {color: COLORS.brownGrey}]}>
            1234 Palm Beach, FL 33480
          </Text>
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
      <View style={styles.cardTwo}>
      <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
          Vessel Detail{' '}
        </Text>
        <View style={{flexDirection: 'row',marginVertical:10 }}>
        <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
          Vessel{' '}
        </Text>
        <Text style={[FONTS.mediumFont16, {color: COLORS.primary}]}>
          Blue Lady{' '}
        </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              LOA{' '}
            </Text>
            <Text style={[FONTS.boldFont18, {color: COLORS.primary}]}>
              30 ft
            </Text>
          </View>

        
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SIZES.fifteen,
            }}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              Manu
            </Text>
            <Text style={[FONTS.boldFont18, {color: COLORS.primary}]}>
              {' '}
              Mercedes
            </Text>
          </View>

        </View>
        <View
          style={{
            marginVertical: SIZES.ten,
            borderBottomWidth: StyleSheet.hairlineWidth,
            color: COLORS.brownGrey,
          }}
        />
         <Text style={[FONTS.boldFont20, {color: COLORS.BLACK}]}>
              Order Detail{' '}
            </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:10 }}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              Order ID{' '}
            </Text>
            <Text style={[FONTS.boldFont18, {color: COLORS.primary}]}>
              1234
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              15 Sep 22
            </Text>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              {' | '}04:45{' '}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: SIZES.fifteen,
            }}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              Status
            </Text>
            <Text style={[FONTS.boldFont18, {color: COLORS.primary}]}>
              {' '}
              Active
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>50</Text>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              {' '}
              gal Diesel{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            marginVertical: SIZES.ten,
            borderBottomWidth: StyleSheet.hairlineWidth,
            color: COLORS.brownGrey,
          }}
        />
        <View
          style={{
    
           
            justifyContent: 'space-between',
            marginTop: SIZES.ten,
          }}>
         <Text style={[FONTS.boldFont20, {color: COLORS.BLACK}]}>
            Instrations{' '}
            </Text>
            <View style={{flexDirection:'row',marginVertical:10 }}>
          <Text style={[FONTS.mediumFont12, {color: COLORS.brownGrey}]}>
          Lorem Ipsum is simply Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          
          </Text>
       </View>
        </View>
      </View>

      <View style={{flexDirection:'row',marginVertical:25 }}>
      <Text style={[FONTS.mediumFont12, {color: COLORS.primary}]}>
            Order History {' '}
            </Text>
        <Text style={[FONTS.mediumFont12, {color: COLORS.brownGrey}]}>
           for cancellatiopn or ammendments in order
            </Text>
            </View>
      <View style={{paddingTop: height * 0.03}}>
        <CustomButton
          title="Start"
          onPress={() => navigation.navigate(SCREENS.Login)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.fifteen,
    padding: SIZES.fifteen,
  },
  cardTwo: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.fifteen,
    padding: SIZES.fifteen,
    marginTop: SIZES.fifteen,
  },
  listcard: {
    marginBottom: SIZES.ten,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.fifteen,
    padding: SIZES.fifteen,
  },
});
