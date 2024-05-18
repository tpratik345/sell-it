import { StyleSheet, Text } from 'react-native'
import React from 'react'
import defaultStyles from '../config/defaultStyles'

const AppText = ({children, style}) => {
  return (
    <Text style={[defaultStyles.text, style]}>{children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
  // text: {
  //   color: '#000',
  //   fontWeight: '600',
  //   ...Platform.select({
  //     ios: {
  //       fontSize: 20,
  //       fontFamily: 'Avenir'
  //     },
  //     android: {
  //       fontSize: 18,
  //       fontFamily: 'Roboto'
  //     }
  //   })
  // }
})