import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import { ListItem } from '../components/lists'


const RedJacket = require('../assets/jacket.jpg')
const UserIcon = require('../assets/user.png')

const ListingDetailsScreen = ({ route }) => {
  const listing = route.params;

  return (
    <View>
      <Image style={styles.image} source={listing.image}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem 
              image={UserIcon}
              title={'Pratik Tarkasband'}
              subTitle={'5 Listings'}
            />
        </View>
      </View>
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 10
  },
  image: {
    width: '100%',
    height: 300
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    color: colors.secoondary,
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle: 'italic',
    marginVertical: 10
  },
  userContainer: {
    margin: 10
  }
})