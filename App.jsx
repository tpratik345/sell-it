import { Button, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Screen from './app/components/Screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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

const Account = () => (
  <View>
    <Text>Account</Text>
  </View>
)

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      initialRouteName: "Feed",
      activeColor: "#f0edf6",
      inactiveColor: "#3e2465",
    }}>
    <Tab.Screen
      name='Feed'
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }} />
    <Tab.Screen
      name='Account'
      component={Account}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
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
        <TabNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

