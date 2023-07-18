import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, IMAGES, SIZES, height, width } from '../constants';
import CustomHeader from '../components/CustomHeader';

export default function Notifications() {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const onPressHandler = (id) => () => {
    setSelectedItemId(id);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPressHandler(item?.id)}
      style={[
        styles.notificationsList,
        selectedItemId === item.id && { backgroundColor: COLORS.primary, borderTopLeftRadius: 20, }, // Change the background color for the selected item
      ]}
    >
      <Image source={IMAGES.Profile} style={styles.memberImgStyle} />
      <Text style={[FONTS.mediumFont14, { color: COLORS.black }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <CustomHeader title="Notifications" showBackButton />
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: SIZES.fifteen,
  },
  memberImgStyle: {
    width: width * 0.1,
    height: height * 0.05,
    borderRadius: SIZES.five,
    marginRight: SIZES.five,
  },
  notificationsList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.ten,
    paddingVertical: SIZES.ten,
    borderColor: COLORS.blackWithOpacity,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: SIZES.ten,
  },
});

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
    {
    id: '3',
    title: 'Third Item',
    },
    {
    id: '4',
    title: 'Fourth Item',
    },
];
