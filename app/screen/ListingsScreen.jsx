import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Best watch out there',
        price: 500,
        image: require('../assets/watch2.jpg')
    },
    {
        id: 3,
        title: 'Light your future with these lamps',
        price: 300,
        image: require('../assets/lamps.jpg')
    },
]

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
        <FlatList
            data={listings}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => 
                <Card 
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}
                />
            }
        />
    </Screen>
  )
}

export default ListingsScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})