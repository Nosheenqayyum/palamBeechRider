import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import { IMAGES, COLORS, FONTFAMILY, SIZES, STYLES, FONTS, googleTheme } from '../constants/';
import CustomButton from './CustomButton';
import Icon, { Icons } from './Icons';

const { width } = Dimensions.get('window');

const PriceCard = (props) => {
    const [wallet, setwallet] = useState()


    const RowText = ({ title, value, wallet }) => {
        return (

            <View>
                {value ?

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: SIZES.fifteen }} >
                        <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>{title}</Text>
                        <Text style={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}>{value}</Text>


                    </View>
                    : null}


            </View>

        )
    }

    const OrderText = ({ title, total, }) => {
        return (

            <View style={{}} >
                {total ?

                    <View style={{ marginBottom: SIZES.twenty, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: SIZES.twentyFive }} >
                        <Text style={[FONTS.mediumFont18, { color: COLORS.black }]}>{title}</Text>
                        <Text style={[FONTS.mediumFont18, { color: COLORS.black }]}>{total}</Text>


                    </View>
                    : null}


            </View>

        )
    }

    return (
        <View style={{ marginVertical: SIZES.fifteen, }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: SIZES.fifteen }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Icon type={Icons.MaterialCommunityIcons} name="ticket" color={COLORS.secondary} size={25} />
                    <Text style={[FONTS.mediumFont14, { color: COLORS.BLACK }]}> Order Summary</Text>
                </View>

            </View>
            <RowText title="50 gal Diesel" value="$ 350.00" />
            <RowText title="Delivery Charges" value="$ 100.00" />
            <RowText title="Wallet" value="- $ 100.00" />


            <View style={{ marginTop: SIZES.fifteen }}>
                <ToggleSwitch
                    isOn={wallet}
                    onColor={COLORS.secondary}
                    offColor='grey'
                    label="  Use Wallet"
                    size="medium"
                    onToggle={isOn => setwallet(isOn)}
                    labelStyle={[FONTS.mediumFont14, { color: COLORS.brownGrey }]}
                />

            </View>
            <OrderText title="Total" total="$ 350.00" />

        </View>
    )

}


const styles = StyleSheet.create({
    card: {
        alignSelf: 'center',
        width: width * 0.85,
        height: width * 0.15,

        flexDirection: 'row',
        backgroundColor: '#F0F3F5',
        borderRadius: 12,
        marginBottom: 10

    }
})

export default PriceCard;