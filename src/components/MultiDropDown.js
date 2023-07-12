import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import {FONTS, SIZES, COLORS, width} from '../constants';

import Row from './Row';
import {Searchbar} from 'react-native-paper';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import utils from '../utils';
import Icon, {Icons} from './Icons';
import CustomBotton from './CustomButton';

export default function MutiDropDown(props) {
  const Props = props;
  const [isVisible, setisVisible] = useState(false);
  const [selectedValue, setselectedValue] = useState(Props.value);
  const [Data, setData] = useState(Props.data);
  const [showSearch, setshowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');

  const selectValue = Item => {
    setshowSearch(false);

    if (props.single) {
      setselectedValue([Item]);
      props.onChange([Item]);
      setisVisible(false);
    } else {
      let value = selectedValue.find(x => x.id === Item.id);

      if (value !== undefined) {
        let tmp = [];

        selectedValue.map((item, index) => {
          if (Item.id !== item.id) {
            tmp.push(item);
          }
        });
        setselectedValue(tmp);
        props.onChange(tmp);
      } else {
        if (Item.title === 'None') {
          let tmp = [Item];
          setselectedValue(tmp);
          props.onChange(tmp);
        } else {
          remainingArr = selectedValue.filter(data => data.title != 'None');
          console.log(remainingArr);

          let tmp = [...remainingArr, Item];
          setselectedValue(tmp);
          props.onChange(tmp);
        }
      }
    }
  };

  const chechIds = ID => {
    if (selectedValue !== undefined && selectedValue !== null) {
      let value = selectedValue.find(x => x.id === ID);
      if (value !== undefined) {
        return true;
      } else {
        return false;
      }
    }
  };

  const RenderList = React.memo(
    props => {
      return (
        <TouchableOpacity
          activeOpacity={0.85}
          key={props.index.toString()}
          onPress={() => {
            selectValue(props.item);
            handleSearch(searchText);
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
          }}>
          <Text
            style={[
              FONTS.mediumFont14,
              {
                textAlign: 'center',
                color: chechIds(props.item.id) ? COLORS.primary : COLORS.black,
              },
            ]}>
            {props.item.title || props.item.name}
          </Text>
        </TouchableOpacity>
      );
    },
    [selectedValue],
  );

  const handleSearch = e => {
    setshowSearch(true);
    let text = e.toString().toLowerCase();
    if (text === '' || utils.isEmptyOrSpaces(text)) {
      setData(props?.data);
      setSearchText(e);
      return;
    }
    let temp = props?.data;

    let filteredList = temp?.filter(item => {
      return (
        item['title']?.toLowerCase().match(text) ||
        item['name']?.toLowerCase().match(text)
      );
    });
    setSearchText(e);
    setData(filteredList);
  };
  const SortData = data => {
    return data;
    // return Data.sort(function (a, b) {
    //   return (
    //     (b.title === 'United Arab Emirates') -
    //       (a.title === 'United Arab Emirates') || b.title - a.title
    //   );
    // });
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.85}
        disabled={props.disabled ? true : false}
        activeOpacity={0.85}
        onPress={() => {
          if (props.selectedCountry) {
            if (props.selectedCountry.length > 0) {
              setisVisible(true);
            } else {
              utils.warningAlert('Please select country first');
            }
          } else {
            setisVisible(true);
          }
        }}>
        <Row
          style={[
            {
              borderWidth: 0.5,
              borderColor: COLORS.grey,
              flexDirection: 'row',
              //   flexDirection: RTL ? 'row-reverse' : 'row',
              paddingHorizontal: SIZES.fifteen,
              borderRadius: 20,
              alignItems: 'center',
              marginBottom: SIZES.ten,
              justifyContent: 'space-between',
              paddingVertical: SIZES.twenty,
              backgroundColor: COLORS.grey,
            },
            props.style,
          ]}>
          <Text style={[FONTS.mediumFont14, {color: COLORS.black}]}>
            {props.title}
          </Text>
          <Icon
            type={Icons.Ionicons}
            name={'chevron-down-outline'}
            style={{fontSize: 20, color: COLORS.BLACK}}
          />
        </Row>
      </TouchableOpacity>

      <Modal visible={isVisible} transparent animationType="slide">
        <View
          style={{
            flex: 1,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flex: props.showSearchbar ? 1 : 0.5,
              backgroundColor: COLORS.white,
              paddingHorizontal: 15,
              borderTopLeftRadius: props.showSearchbar ? 0 : 15,
              borderTopRightRadius: props.showSearchbar ? 0 : 15,
              paddingTop: getStatusBarHeight() * 0.85,
            }}>
            <TouchableOpacity
              activeOpacity={0.85}
              activeOpacity={0.85}
              onPress={() => {
                setisVisible(false);
              }}
              style={{
                position: 'absolute',
                alignSelf: 'baseline',
                end: getStatusBarHeight() * 0.85,
                top: getStatusBarHeight() * 0.85,
                zIndex: 1000000,
              }}>
              <Icon
                type={Icons.FontAwesome}
                name={'close'}
                color={COLORS.black}
              />
            </TouchableOpacity>
            {props.multiple && (
              <TouchableOpacity
                activeOpacity={0.85}
                activeOpacity={0.85}
                onPress={() => {
                  setselectedValue([]);
                  // props.onChange([]);
                }}
                style={{
                  position: 'absolute',
                  alignSelf: 'baseline',
                  start: getStatusBarHeight() * 0.85,
                  top: getStatusBarHeight() * 0.85,
                  zIndex: 1000000,
                }}>
                <Text
                  style={[
                    FONTS.mediumFont12,
                    {
                      textAlign: 'center',
                      textDecorationLine: 'underline',
                    },
                  ]}>
                  {'Clear'}
                </Text>
              </TouchableOpacity>
            )}
            <Text
              style={[
                FONTS.boldFont24,
                {
                  textAlign: 'center',
                  marginTop: SIZES.twenty,
                  marginBottom: SIZES.ten,
                },
              ]}>
              {props?.title}
            </Text>

            {props.showSearchbar && (
              <Searchbar
                onChangeText={handleSearch}
                placeholder={'Search..'}
                searchAccessibilityLabel="ok"
                iconColor={COLORS.primary}
                value={searchText}
                style={{
                  borderRadius: 20,
                  color: COLORS.brownGrey,
                  marginVertical: SIZES.ten,
                  backgroundColor: COLORS.white,
                }}
                inputStyle={[FONTS.mediumFont14, {color: COLORS.black}]}
              />
            )}

            <>
              {showSearch ? (
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={Props.data}
                  keyExtractor={(item, index) => {
                    item.toString();
                  }}
                  renderItem={({item, index}) => {
                    return <RenderList item={item} index={index} />;
                  }}
                />
              ) : (
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={SortData(Data)}
                  keyExtractor={(item, index) => {
                    item.toString();
                  }}
                  renderItem={({item, index}) => {
                    return <RenderList item={item} index={index} />;
                  }}
                />
              )}
            </>

            {props.multiple && (
              <CustomBotton
                isDark={false}
                label={'Save'}
                gradientStyle={{
                  // marginTop: SIZES.fifteen,
                  position: 'absolute',
                  alignSelf: 'center',
                  width: '95%',
                  bottom: SIZES.twentyFive,
                }}
                onPress={() => {
                  props.onChange(selectedValue);
                  setisVisible(false);
                }}
              />
            )}
          </View>
        </View>
      </Modal>
    </>
  );
}
