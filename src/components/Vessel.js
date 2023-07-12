import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MultiDropDown from '../components/MultiDropDown';
import { COLORS, FONTS, SIZES } from '../constants';
import InputText from './TextInput';

export default function Vessel() {
    const [vessle, setvessle] = useState([])

    return (
        <View>
            <Text style={[FONTS.mediumFont14, { color: COLORS.BLACK, marginBottom: SIZES.ten }]}>Select Vessel</Text>
            <MultiDropDown
                // multiple
                // showSearchbar
                single
                placeholder={'Select Vessel'}
                data={FuelData}
                viewProperty="title"
                onChange={val => {
                    setvessle(val)
                }}

                title={vessle?.length > 0 ? vessle[0]?.title : "Select Vessel"}
                value={vessle}
            />
            <Text style={[FONTS.mediumFont14, { color: COLORS.BLACK}]}>Remaining fuel in tank</Text>
            <InputText/>


        </View>
    )
}

const styles = StyleSheet.create({})

const FuelData = [
    {
        id: 1,
        title: 'Vessel 1'
    },
    {
        id: 2,
        title: 'Vessel 2'
    },
    {
        id: 3,
        title: 'Vessel 3'
    },
    {
        id: 4,
        title: 'Vessel 4'
    },
    {
        id: 5,
        title: 'Vessel 5'
    },
    {
        id: 6,
        title: 'Vessel 6'
    },
    {
        id: 7,
        title: 'Vessel 7'
    },



]