import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View>
        {children}
      </View>
    </SafeAreaView>
  )
}

export default Screen

const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // flex: 1,
    height: '100%'
  }
})