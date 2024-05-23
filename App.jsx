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

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title='View Tweet'
      onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
    />
  )
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>TweetDetails: {route?.params?.id}</Text>
  </Screen>
)

const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'purple' },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen
      name='Tweets'
      component={Tweets}
    />
    <Stack.Screen
      name='TweetDetails'
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
)


const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      initialRouteName: "Feed",
      activeColor: colors.tabActiveColor,
      inactiveColor: colors.tabInactiveColor,
    }}>
    <Tab.Screen
      name='Feed'
      component={ListingsScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
    <Tab.Screen
      name='ListingEditScreen'
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="plus" color={color} size={26} />
        ),
      }} />
    <Tab.Screen
      name='AccountScreen'
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
)

const App = () => {

  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <TabNavigator /> */}
        <AuthNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

