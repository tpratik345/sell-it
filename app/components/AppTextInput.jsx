import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import defaultStyles from '../config/defaultStyles'

const AppTextInput = ({ icon, ...otherProps }) => {
    return (
        <View style={styles.container}>
            { icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/> }
            <TextInput
                style={defaultStyles.text}
                placeholderTextColor={defaultStyles.colors.medium}
                {...otherProps}
            />
        </View>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 35,
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    }
})