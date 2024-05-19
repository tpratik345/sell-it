import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppText from './AppText'

const PickerItem = ({ item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  )
}

export default PickerItem

const styles = StyleSheet.create({
    text: {
        padding: 10
    }
})