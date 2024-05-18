import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import WelcomeScreen from './app/screen/WelcomeScreen'
import ListingDetailsScreen from './app/screen/ListingDetailsScreen'
import ViewImageScreen from './app/screen/ViewImageScreen'
import MessagesScreen from './app/screen/MessagesScreen'
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screen/AccountScreen';
import ListingsScreen from './app/screen/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screen/LoginScreen';
import ListingEditScreen from './app/screen/ListingEditScreen';

// const categories = [
//   { label: 'Furniture', value: 1},
//   { label: 'Clothing', value: 2},
//   { label: 'Cameras', value: 3},
// ]

const App = () => {
  const [category, setCategory] = useState('');

  return (
    <GestureHandlerRootView>
      <View>
        {/* <WelcomeScreen /> */}
        {/* <ListingDetailsScreen /> */}
        {/* <ViewImageScreen /> */}
        <MessagesScreen />
        {/* <ListItem
          title={'Pratik Tarkasband'}
          // subTitle={'5 Listings'}
          IconComponent={<Icon
            name='email'
            size={50} />} image={undefined} subTitle={undefined} onPress={undefined} renderRightActions={undefined} /> */}
        {/* <Icon 
          name='email'
          size={100}
          // backgroundColor='red'
          // iconColor='white'
        /> */}
        {/* <AccountScreen /> */}
        {/* <ListingsScreen /> */}
        {/* <AppTextInput icon={'email'} placeHolder="Username"/>
        <AppPicker
            selectedItem={category}
            onSelectItem={(item: any) => setCategory(item)}
            items={categories} icon={'apps'} placeholder={'Category'} /> */}
        {/* <LoginScreen /> */}
        {/* <ListingEditScreen /> */}
      </View>
    </GestureHandlerRootView>
  )
}

export default App