import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { ListItem, ListItemSeparator, ListItemDeleteAction } from '../components/lists'
import Screen from '../components/Screen'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/user.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/user.png')
    },
    {
        id: 3,
        title: 'T3',
        description: 'D3',
        image: require('../assets/user.png')
    },
]


const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages)
    }

    return (
        <Screen>
            <FlatList
                style={styles.list}
                data={messages}
                keyExtractor={(message) => message?.id?.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages((prev) => [
                        ...prev, {
                            id: 4,
                            title: 'T4',
                            description: 'D4',
                            image: require('../assets/user.png')
                        }
                    ])
                }}
            />
        </Screen>
    )
}

export default MessagesScreen

const styles = StyleSheet.create({
    list: {
        // flex: 1,
        // margin: 10,
        // backgroundColor: 'white'
    },
})