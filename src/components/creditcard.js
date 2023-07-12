import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { IMAGES, COLORS, FONTFAMILY, SIZES, STYLES, FONTS, googleTheme } from '../constants/';

const { width } = Dimensions.get('window');

const CreditCard = (props) => {
    return (

        <View style={styles.card}>
            <Image source={IMAGES.mastercard} resizeMode={'contain'} style={{ alignSelf: 'center', width: width * 0.2, height: width * 0.1 }} />
            <Text style={[FONTS.mediumFont16, { color: COLORS.BLACK, alignSelf: 'center', textAlignVertical: 'auto' }]}>**** **** **** 6589</Text>
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

export default CreditCard;