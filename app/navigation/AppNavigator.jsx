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

const Tab = createMaterialBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                initialRouteName: "Feed",
                activeColor: colors.tabActiveColor,
                inactiveColor: colors.tabInactiveColor,
            }}>
            <Tab.Screen
                name='Feed'
                component={FeedNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='ListingEdit'
                component={ListingEditScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="plus" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='AccountNavigator'
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