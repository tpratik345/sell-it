import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import colors from '../config/colors';
import ListingsScreen from '../screen/ListingsScreen';
import ListingEditScreen from '../screen/ListingEditScreen';
import AccountScreen from '../screen/AccountScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import routes from './routes';

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                initialRouteName: routes.FEED,
                activeColor: colors.tabActiveColor,
                inactiveColor: colors.tabInactiveColor,
            }}>
            <Tab.Screen
                name={routes.FEED}
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.LISTING_EDIT}
                component={ListingEditScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus-circle" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.ACCOUNT_NAVIGATOR}
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})