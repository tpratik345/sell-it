import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import WelcomeScreen from '../screen/WelcomeScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import routes from './routes';


const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.WELCOME}
                component={WelcomeScreen}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
            <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
        </Stack.Navigator>
    )
}

export default AuthNavigator

const styles = StyleSheet.create({})