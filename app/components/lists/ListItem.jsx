import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../AppText'
import colors from '../../config/colors'
import defaultStyles from '../../config/defaultStyles';

const ListItem = ({ image, title, subTitle, IconComponent, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={onPress}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons name='chevron-right' size={25} color={defaultStyles.colors.medium}/>
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
  detailsContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontWeight: '600'
  },
  subTitle: {
    color: colors.medium,
    fontStyle: 'italic'
  }
})