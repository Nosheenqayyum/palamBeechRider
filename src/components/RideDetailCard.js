import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTFAMILY, SCREENS, SIZES } from '../constants';
import CustomButton from './CustomButton';
import LocationView from './LocationView';
import RowText from './RowText';
import Card from './Card';

import { useNavigation } from '@react-navigation/native';
import MyTouchableOpacity from './MyTouchableOpacity';
import { useDispatch } from 'react-redux';

import {
  hideLoader,
  showLoader,
  todayOrderSAction,
  selectedOrdersAction,
  completeOrderStatusAction,
  onGoingOrderSAction,
} from '../redux/slices';
import utils from '../utils';
import moment from 'moment';

export default function RideDetailCard({ showButtom, item }, props) {
  const navigation = useNavigation();
  const dispatcher = useDispatch();

  const completeOrder = () => {
    dispatcher(hideLoader());
    dispatcher(completeOrderStatusAction(item?.id))
      .unwrap()
      .then(response => {
        console.log('order complete', response);
        dispatcher(hideLoader());

        GetOnGoingOrder();
        getOrderAllTodayOrders();
      })
      .catch(err => {
        console.log(err?.message);
        utils.errorAlert(err?.message);
        dispatcher(hideLoader());
      });
    dispatcher(showLoader());
  };

  const GetOnGoingOrder = () => {
    dispatcher(onGoingOrderSAction({}))
      .unwrap()
      .then(response => {
        if (response === 'No Record Found') {
          selectOrder();
          console.log(response);
        }
      })
      .catch(err => {
        utils.errorAlert(err?.message);
      });
  };

  const selectOrder = data => {
    dispatcher(hideLoader());
    dispatcher(selectedOrdersAction({}))
      .unwrap()
      .then(response => {
        dispatcher(hideLoader());
      })
      .catch(err => {
        console.log(err?.message);
        utils.errorAlert(err?.message);
        dispatcher(hideLoader());
      });
    dispatcher(showLoader());
  };

  const getOrderAllTodayOrders = data => {
    dispatcher(hideLoader());
    dispatcher(todayOrderSAction({}))
      .unwrap()
      .then(response => {
        dispatcher(hideLoader());
      })
      .catch(err => {
        console.log(err?.message);
        utils.errorAlert(err?.message);
        dispatcher(hideLoader());
      });
    dispatcher(showLoader());
  };

  let FuelType = item?.order_type === 'fuel_polishing';

  return (
    <Card style={styles.container}>
      <MyTouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.OrderDetails, { item: item });
        }}>
        <View style={[styles.row, {}]}>
          <View>
            <RowText
              title="Order Type "
              value={FuelType ? 'Fuel Polishing' : 'Schedule'}
            />
            <RowText title="Status " value={item?.order_status === 'in_progress' ? "In Progress" : item?.order_status} />
          </View>

          <View style={{ alignItems: 'flex-end' }}>

            <Text style={styles.txt}>
              {moment(item?.scheduled_date_time).format('YYYY-MM-DD HH:mm')}
            </Text>


            <Text style={styles.txt}>
              {FuelType
                ? item?.remaining_fuel_in_tank
                : item?.order_items[0]?.quantity}
              {' '}Gallon{' '}
              {FuelType
                ? item?.product_name
                : item?.order_items[0]?.product?.name}{' '}
            </Text>
          </View>
        </View>

        {item?.order_status !== 'completed' && <LocationView item={item} />}

        {showButtom && (
          <CustomButton
            title={item?.order_status === 'in_progress' ? 'Complete' : 'Start'}
            btnStyle={{ marginVertical: SIZES.ten }}
            onPress={() => {
              completeOrder();
            }}
          />
        )}
      </MyTouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.fifteen,

    borderRadius: SIZES.fifteen,

    marginTop: SIZES.ten,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    fontFamily: FONTFAMILY.Medium,
    color: COLORS.BLACK,
    fontSize: SIZES.fifteen,
    marginBottom: SIZES.ten,
  },
});
