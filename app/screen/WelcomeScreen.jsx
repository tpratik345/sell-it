import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
const WelcomeImage = require('../assets/welcome.jpg');
const Logo = require('../assets/logo.png');

const WelcomeScreen = () => {
  return (
    <ImageBackground blurRadius={6} style={styles.background} source={WelcomeImage}>
            {/* <AppText>I love react native</AppText> */}
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={Logo}/>
            <AppText style={style.tagLine}>Sell What You Don't Need</AppText>
        </View>
        <View style={styles.btnContainer}>
            <AppButton title={'Login'} />
            <AppButton title={'Register'} color='dangerBtn'/>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        width:  '100%',
        alignItems: 'center'
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 20,
        width: '100%',
        padding: 10
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    tagLine: {
        paddingVertical: 10
    }
})

export default WelcomeScreen
