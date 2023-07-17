import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  Linking,
  Alert,
} from 'react-native';
import moment from 'moment';
import {
  COLORS,
  CONSTANTS,
  FONTS,
  IMAGES,
  SIZES,
  STYLES,
  width,
} from '../../constants';

import {useSelector} from 'react-redux';
import utils from '../../utils';
import Icon, {Icons} from '../../components/Icons';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import CustomHeader from '../../components/CustomHeader';

const callNumber = phone => {
  console.log('callNumber ----> ', phone);
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
};

export default function GroupChat({navigation, route}) {
  const flatListRef = useRef();

  const time = moment(new Date()).format();

  const [message, setmessage] = useState('');
  const [MessageList, setMessageList] = useState('');

  const renderMessages = ({item}) => {
    console.log(item?.senderId);
    // let user = data?.members.find(x => x.id === item.senderId);

    return (
      <View
        style={{
          flexDirection: item.senderId === profile?.id ? 'row-reverse' : 'row',

          alignItems: 'flex-end',
          marginTop: 10,

          alignSelf: item.senderId === profile?.id ? 'flex-end' : 'flex-start',
        }}>
        <Image
          resizeMode="contain"
          source={IMAGES.Profile}
          style={{
            height: width * 0.08,
            width: width * 0.08,

            borderRadius: width,
          }}
        />

        <View style={{maxWidth: width * 0.7}}>
          <View
            style={[
              STYLES.shadow,
              styles.msgBoxStyle,
              {
                backgroundColor:
                  item.senderId === profile?.id
                    ? COLORS.senderChat
                    : COLORS.secondary,
              },
            ]}>
            <Text
              style={[
                FONTS.regularFont14,
                {
                  color:
                    item.senderId === profile?.id ? COLORS.black : COLORS.white,
                },
              ]}>
              {item.message}
            </Text>

            <Text
              style={[
                FONTS.mediumFont10,
                {
                  marginTop: SIZES.five,
                  alignSelf:
                    item.senderId === profile?.id ? 'flex-start' : 'flex-end',
                  color:
                    item.senderId === profile?.id ? COLORS.black : COLORS.white,
                },
              ]}>
              {moment(item?.time).format('hh:mm a')}
            </Text>
          </View>
          {/* <Text style={FONTS.mediumFont10}>{user?.name}</Text> */}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={STYLES.container}>
      <CustomHeader title="Chat" showBackButton />
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={IMAGES.Profile} style={styles.memberImgStyle} />

          <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
            John Doe {/* {orderDetail?.rider?.name} */}
          </Text>
        </View>

        <MyTouchableOpacity
          style={{
            backgroundColor: COLORS.secondary,
            overflow: 'hidden',
            borderRadius: SIZES.ten,
            padding: 10,
          }}
          onPress={() => {
            callNumber(
              orderDetail?.rider?.country_code + orderDetail?.rider?.phone,
            );
          }}>
          <Icon
            type={Icons.MaterialIcons}
            name="call"
            color={COLORS.white}
            size={20}
          />
        </MyTouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={MessageList}
        renderItem={renderMessages}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.flatlistStyle}
        onContentSizeChange={() =>
          flatListRef?.current?.scrollToEnd({animated: true})
        }
      />

      <View style={styles.txtInputContainer}>
        <TextInput
          value={message}
          onChangeText={setmessage}
          placeholder="Type here.."
          placeholderTextColor={COLORS.gray}
          style={styles.textInputStyle}
        />

        <TouchableOpacity
          onPress={() => {
            if (!utils.isNull(message)) {
              sendChatMessage();
            } else {
            }
          }}>
          <View style={[styles.sendBtnStyle]}>
            <Icon
              name="send"
              type={Icons.Feather}
              style={styles.sendIconStyle}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerView: {
    paddingTop: SIZES.twentyFive,
    paddingBottom: SIZES.twentyFive,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.fifteen,
    backgroundColor: COLORS.white,
    borderTopStartRadius: SIZES.twenty,
    borderTopEndRadius: SIZES.twenty,
  },
  dpStyle: {
    borderWidth: 1,
    borderColor: COLORS.white,
    marginRight: SIZES.ten,
    marginLeft: SIZES.twentyFive,
    height: SIZES.twentyFive * 1.9,
    width: SIZES.twentyFive * 1.9,
    borderRadius: SIZES.twentyFive * 1.9,
  },
  flatlistStyle: {
    flexGrow: 1,
    paddingBottom: SIZES.twentyFive,
    paddingHorizontal: SIZES.twenty,
    backgroundColor: COLORS.white,
  },
  msgBoxStyle: {
    // maxWidth: '70%',
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.fifteen,
    borderRadius: SIZES.ten * 1.3,
    // marginTop: SIZES.fifteen,
  },
  txtInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.fifteen,
    paddingVertical: SIZES.ten,
    borderTopWidth: 1,
    borderTopColor: COLORS.blackWithOpacity,
  },
  textInputStyle: {
    flex: 1,
    height: SIZES.twenty * 2,
    color: COLORS.black,
    marginRight: SIZES.ten,
  },
  sendBtnStyle: {
    height: SIZES.fifty * 0.75,
    width: SIZES.fifty * 0.75,
    borderRadius: SIZES.fifty * 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
  },
  sendIconStyle: {
    marginLeft: -1,
    color: COLORS.white,
    fontSize: SIZES.twenty * 1.3,
  },
  memberImgStyle: {
    height: SIZES.fifty * 0.8,
    width: SIZES.fifty * 0.8,
    borderRadius: SIZES.fifty * 0.8,
    marginRight: SIZES.fifteen,
    backgroundColor: COLORS.white,
  },
});
