import { Button, FlatList, Modal, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import AppText from './AppText'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import defaultStyles from '../config/defaultStyles';
import Screen from './Screen';
import PickerItem from './PickerItem';

const AppPicker = ({ icon, items, placeholder, width = '100%',
    numberOfColumns = 1, selectedItem, onSelectItem, PickerItemComponent = PickerItem }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon &&
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyles.colors.medium}
                            style={styles.icon}
                        />}
                    {selectedItem
                        ? <AppText style={styles.text}>{selectedItem.label}</AppText>
                        : <AppText style={styles.placeholder}>{placeholder}</AppText>
                    }
                    <MaterialCommunityIcons
                        name={'chevron-down'}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType='slide'>
                <Screen>
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        numColumns={numberOfColumns}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) =>
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        }
                    />
                </Screen>
            </Modal>
        </>
    )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        flex: 1
    }
})