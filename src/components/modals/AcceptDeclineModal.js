import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  COLORS,
  FONTFAMILY,
  height,
  IMAGES,
  SIZES,
  width,
} from '../../constants';
import CustomButton from '../CustomButton';
import Icon, {Icons} from '../Icons';

const AcceptDeclineModal = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={IMAGES.Profile}
                  resizeMode="contain"
                  style={{
                    height: width * 0.15,
                    width: width * 0.12,
                  }}
                />
                <Text
                  style={{
                    color: COLORS.black,
                    marginLeft: SIZES.ten - 2,
                    fontFamily: FONTFAMILY.Medium,
                    fontSize: SIZES.fifteen - 2,
                  }}>
                  Earl Guerrero
                </Text>
              </View>

              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    color: COLORS.secondary,
                    fontFamily: FONTFAMILY.Bold,
                    fontSize: SIZES.fifteen,
                  }}>
                  150$
                </Text>
                <Text
                  style={{
                    color: COLORS.brownGrey,
                    fontFamily: FONTFAMILY.Medium,
                    fontSize: SIZES.body12,
                  }}>
                  1.5km
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={{
                    color: COLORS.brownGrey,
                    fontFamily: FONTFAMILY.Medium,
                    fontSize: SIZES.body12,
                  }}>
                  PICK UP
                </Text>
                <Text
                  style={{
                    color: COLORS.black,
                    fontFamily: FONTFAMILY.Light,
                    fontSize: SIZES.body12,
                  }}>
                  7958 Swift Village
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.85}>
                <Image
                  source={IMAGES.callButton}
                  resizeMode="contain"
                  style={{
                    height: width * 0.15,
                    width: width * 0.12,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'column'}}>
              <Text
                style={{
                  color: COLORS.brownGrey,
                  fontFamily: FONTFAMILY.Medium,
                  fontSize: SIZES.body12,
                }}>
                DROP OFF
              </Text>
              <Text
                style={{
                  color: COLORS.black,
                  fontFamily: FONTFAMILY.Light,
                  fontSize: SIZES.body12,
                }}>
                105 Williams St, Chicago, US
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
              <CustomButton
                title="Ignore"
                btnStyle={styles.btn}
                onPress={() => setModalVisible(!modalVisible)}
              />
              <CustomButton
                title="Accept"
                btnStyle={styles.btn}
                onPress={() => navigation.navigate(SCREENS.UserDetails)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: SIZES.fifteen,
    width: width * 0.3,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: SIZES.twentyFive,
  },
  modalView: {
    paddingHorizontal: SIZES.fifteen,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: width * 0.9,
    height: width * 0.6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AcceptDeclineModal;
