import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from './Icon';
import AppText from './AppText';

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.new} onPress={onPress}>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
                <AppText style={styles.label}>{item.label}</AppText>
            </TouchableOpacity>
        </View>
    );
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    new: {
        textAlign: 'center',
        alignItems: 'center',
        width: '100%'
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: '33%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})