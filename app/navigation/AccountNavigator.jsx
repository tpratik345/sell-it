import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screen/AccountScreen';
import MessagesScreen from '../screen/MessagesScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
            <Stack.Screen name={routes.MESSAGES} component={MessagesScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator