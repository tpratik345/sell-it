import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name='trash-can' color={'white'} size={30}/>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
    container: { 
        backgroundColor: colors.danger,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
    }
})