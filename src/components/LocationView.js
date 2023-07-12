import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon, { Icons } from './Icons';
import { COLORS, FONTFAMILY, SCREENS, SIZES } from '../constants';
import Row from './Row';
import { useNavigation } from '@react-navigation/native';

export default function LocationView({ disabled, item }) {
  const navigation = useNavigation();

  return (
    <View style={styles.row}>
      <Row style={{ alignItems: 'center', }}>
        <Icon
          type={Icons.Ionicons}
          name="location"
          color={COLORS.secondary}
          size={28}
        />
        <Text style={[styles.txt, { color: COLORS.brownGrey }]}>
          {item?.user_address?.street}
        </Text>
      </Row>


      {item?.order_status !== 'completed' && (

        <TouchableOpacity
          disabled={disabled}
          onPress={() => {
            navigation.navigate(SCREENS.TrackLocation);
          }}
          activeOpacity={0.85}
          style={{
            backgroundColor: COLORS.grey,
            padding: SIZES.ten,
            borderRadius: SIZES.fifteen,
          }}>
          <Icon
            type={Icons.MaterialIcons}
            name="my-location"
            color={COLORS.secondary}
            size={28}
          />
        </TouchableOpacity>
      )}


    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fontFamily: FONTFAMILY.Medium,
  color: COLORS.BLACK,
  fontSize: SIZES.fifteen,
  marginBottom: SIZES.ten,
});
