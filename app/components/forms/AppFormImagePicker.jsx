import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageInputList from '../lists/ImageInputList'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

const AppFormImagePicker = ({ name }) => {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri])
    }

    const handleRemove = (uri) => {
        setFieldValue(name,  imageUris.filter(imageUri => imageUri !== uri))
    }

    return (
        <>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

export default AppFormImagePicker

const styles = StyleSheet.create({})