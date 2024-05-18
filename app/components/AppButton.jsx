import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import defaultStyles from '../config/defaultStyles'

const AppButton = ({ title, onPress, color='primaryBtn'}) => {
  return (
    // <View style={[styles.container]}>
    //     <Button color={colors[color]} title={title} onPress={onPress}></Button>
    // </View>
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors[color] }]}
      onPress={onPress} >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.primary,
      borderRadius: 25,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      marginVertical: 5,
    },
    text: {
      fontSize: 18,
      color: defaultStyles.colors.white,
      fontWeight: '600'
    }
})