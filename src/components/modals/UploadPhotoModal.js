import React, {useState} from 'react';

import Modal from 'react-native-modal';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {COLORS, FONTFAMILY, FONTS, height, SIZES} from '../../constants';
import Card from '../Card';
import ImagePicker from 'react-native-image-crop-picker';
import Icon, {Icons} from '../Icons';

export default function UploadPhotoModal(props) {
  //======================= Image Picker From Gallery Methood ================================//
  const choosePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: SIZES.ten * 40,
      height: SIZES.ten * 40,
      cropping: true,
      cropperCircleOverlay: props.isCircle,
      includeBase64: true,
    }).then(image => {
      props.setVisibility(false);
      props.onImageSelected(image.path.toString());
      props.handleBase64(image.data);
    });
  };

  //======================= Image Capture From Camera Methood ================================//
  const takePhotoFromCamera = async () => {
    ImagePicker.openCamera({
      width: SIZES.ten * 40,
      height: SIZES.ten * 40,
      cropping: true,
      cropperCircleOverlay: props.isCircle,
      includeBase64: true,
    }).then(image => {
      props.setVisibility(false);
      props.onImageSelected(image.path.toString());
      props.handleBase64(image.data);
    });
  };

  //************rendorBottomSheet */
  const renderBottomSheetContent = () => {
    return (
      <View style={styles.bottomSheetBody}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={[
              FONTS.mediumFont16,
              {
                color: COLORS.BLACK,
              },
            ]}>
            Upload Photo
          </Text>
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              props.setVisibility(false);
            }}>
            <Icon
              type={Icons.Ionicons}
              name={'close-sharp'}
              style={{color: COLORS.primary, fontSize: 22}}
              //   onPress={() => props.setVisibility(false)}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={[
            FONTS.lightFont12,
            {
              color: COLORS.brownGrey,
            },
          ]}>
          Select a photo from
        </Text>
        <View
          style={{
            marginTop: SIZES.ten * 3,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Card
            style={[
              styles.viewSelectImageType,
              {
                marginRight: SIZES.ten,
                backgroundColor: COLORS.primary,
              },
            ]}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.button}
              onPress={() => {
                takePhotoFromCamera();
              }}>
              <Icon
                type={Icons.Ionicons}
                name={'camera'}
                style={{color: COLORS.white, fontSize: SIZES.twentyFive * 2}}
              />
            </TouchableOpacity>
          </Card>
          <Card
            style={[
              styles.viewSelectImageType,
              {
                marginLeft: SIZES.ten,
                backgroundColor: COLORS.white,
              },
            ]}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.button}
              onPress={() => {
                choosePhotoFromGallery();
              }}>
              <Icon
                type={Icons.MaterialIcons}
                name={'photo-library'}
                style={{
                  color: COLORS.primary,
                  fontSize: SIZES.twentyFive * 2,
                }}
              />
            </TouchableOpacity>
          </Card>
        </View>

        <View style={{height: SIZES.fifty}} />
      </View>
    );
  };

  return (
    <Modal
      isVisible={props.visibility}
      style={styles.modal}
      statusBarTranslucent
      deviceHeight={height * height}>
      {renderBottomSheetContent()}
    </Modal>
  );
}

const styles = StyleSheet.create({
  bottomSheetBody: {
    backgroundColor: COLORS.white,
    padding: SIZES.fifteen,
    borderTopStartRadius: SIZES.ten,
    borderTopEndRadius: SIZES.ten,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  viewSelectImageType: {
    flex: 1,
    height: SIZES.fifty * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.ten,
  },
  button: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
