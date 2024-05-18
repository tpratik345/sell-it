import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const Icon = ({ name, size=40, backgroundColor=colors.black, iconColor=colors.white}) => {
  return (
    <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <MaterialCommunityIcons name={name} size={size*0.5} color={iconColor}/>
    </View>
  )
}

export default Icon

const styles = StyleSheet.create({
    container: {
        // width: size,
        // height: size,
        // borderRadius: size / 2,
        // backgroundColor
    }
})