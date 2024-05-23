import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const NewListingComponent = () => {
  return (
    <View style={styles.container}></View>
  )
}

export default NewListingComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 40,
        height: 80,
        width: 80
    }
})