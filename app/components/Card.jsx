import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
        // margin: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    detailsContainer: {
        padding: 20
    },
    title: {
        marginBottom: 5
    },
    subTitle: {
        color: colors.secoondary,
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
})