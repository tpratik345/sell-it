import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

const AppForm = ({ initialValues, validationSchema, onSubmit, children }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => (<>{children}</>)}
        </Formik>
    )
}

export default AppForm

const styles = StyleSheet.create({})