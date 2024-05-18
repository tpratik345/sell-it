import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';

const Lamps  = require('../assets/lamps.jpg')

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name='trash-can-outline' color={'white'} size={30}/>
        </View>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name='close' color={'white'} size={30}/>
        </View>
        <Image
            resizeMode='contain'
            source={Lamps}
            style={styles.image}
        />
    </View>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: colors.black
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    image: {
        width: '100%',
        height: '100%',
    }
})