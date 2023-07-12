import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { IMAGES, COLORS, FONTFAMILY, SIZES, STYLES, FONTS, googleTheme } from '../constants';
import DatePicker from 'react-native-date-picker'


const { width } = Dimensions.get('window');

const DateTimePicker = (props) => {
    const [date, setDate] = useState(new Date())

    return (

        <DatePicker fadeToColor='none' mode='datetime'
            dividerHeight={5}
            textColor={COLORS.secondary}
            is24hourSource='device'
            date={date} onDateChange={setDate} />
    )
}


const styles = StyleSheet.create({

})

export default DateTimePicker;