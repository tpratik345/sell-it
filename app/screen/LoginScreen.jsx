import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'

import Screen from '../components/Screen';

import { AppFormField, SubmitButton, AppForm} from '../components/forms'

const Logo = require('../assets/logo.png');

const validationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().min(4).required().label("Password")
})

const LoginScreen = () => {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={Logo} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={(value) => console.log(value)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    auroCorrect={false}
                    icon={'email'}
                    name={'email'}
                    keyboardType="email-address"
                    placeholder={'Email'}
                />
                <AppFormField
                    name={'password'}
                    autoCapitalize='none'
                    auroCorrect={false}
                    icon={'lock'}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
                <SubmitButton title={'Login'} />
            </AppForm>
        </Screen>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginVertical: 40
    }
})