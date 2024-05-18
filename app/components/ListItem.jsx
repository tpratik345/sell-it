import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'

import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({ image, title, subTitle, IconComponent, onPress, renderRightActions}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image}/>}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    textContainer:{
        marginLeft: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: '600'
    },
    subTitle: {
        color: colors.medium,
        fontStyle: 'italic'
    }
})