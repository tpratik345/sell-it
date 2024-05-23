import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screen/AccountScreen';
import MessagesScreen from '../screen/MessagesScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Account' component={AccountScreen} />
            <Stack.Screen name='Messages' component={MessagesScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator