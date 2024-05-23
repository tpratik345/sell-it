import { Button, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListingEditScreen from './app/screen/ListingEditScreen';
import AccountScreen from './app/screen/AccountScreen';
import ListingsScreen from './app/screen/ListingsScreen';
import colors from './app/config/colors';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {

  return (
    <GestureHandlerRootView>
      <NavigationContainer theme={navigationTheme}>
        {/* <StackNavigator /> */}
        {/* <TabNavigator /> */}
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

