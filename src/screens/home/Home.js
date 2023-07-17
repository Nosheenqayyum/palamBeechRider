import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
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
import Card from '../../components/Card';
import CustomButton from '../../components/CustomButton';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';

export default function Home({navigation}) {


renderItem = ({item}) => (
    <MyTouchableOpacity
    onPress={() => navigation.navigate(SCREENS.orderDetails)}>

<View style={styles.listcard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              OrderID{' '}
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
      </MyTouchableOpacity>

    );

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: SIZES.twenty,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={styles.AppLogo}
          source={IMAGES.AppLogo}
        />
        <View style={{marginLeft: SIZES.ten, alignItems: 'center'}}>
          <Text
            style={[
              FONTS.lightFont08,
              {letterSpacing: 2.5, color: COLORS.BLACK},
            ]}>
            PALM BEACH
          </Text>
          <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
            MARINE FUEL
          </Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
              OrderID{' '}
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

        

        <View style={{paddingTop: height * 0.03}}>
          <CustomButton
            title="Start"
            onPress={() => navigation.navigate(SCREENS.Login)}
          />
        </View>
      </View>



<View style={{}}>  
<FlatList
ListHeaderComponentStyle={{paddingVertical: SIZES.ten}}
ListHeaderComponent={() => 

    <View
    style={{
      paddingTop: height * 0.02,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }}>

      <MyTouchableOpacity 
      onPress={() => navigation.navigate(SCREENS.mapsView)}>
        <Text>
          Click me
        </Text>
      </MyTouchableOpacity>
    <Text style={[FONTS.mediumFont16, {color: COLORS.BLACK}]}>
      Today's Orders
    </Text>
    <Text style={[FONTS.boldFont16, {color: COLORS.primary}]}>
      View All
    </Text>
  </View>


}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  AppLogo: {
    width: width * 0.12,
    height: height * 0.1,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.fifteen,
    padding: SIZES.fifteen,
  },
  listcard: {
    marginBottom: SIZES.ten,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.fifteen,
    padding: SIZES.fifteen,
  },
});


const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
 
  ];