import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListingsScreen from '../screen/ListingsScreen';
import ListingDetailsScreen from '../screen/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            presentation: 'modal',
            gestureEnabled: true
        }}>
            <Stack.Screen name='Listings' component={ListingsScreen} />
            <Stack.Screen
                name='ListingDetails'
                component={ListingDetailsScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default FeedNavigator