import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from './Icon';
import AppText from './AppText';

const CategoryPickerItem = ({ item, onPress }) => {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

export default CategoryPickerItem

const styles = StyleSheet.create({
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