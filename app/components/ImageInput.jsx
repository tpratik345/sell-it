import { Alert, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../config/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';

const ImageInput = ({ imageUri, onChangeImage }) => {

    useEffect(() => {
        requestPermission();
    }, [])

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        // console.log(granted)
        if (!granted) {
            Alert.alert('Permission', 'You need to enable permission to access.', [
                { text: 'Ok' }
            ])
            // Alert.alert('Permission', 'You need to enable permission to access.', [
            //     { text: 'Yes', onPress: () => onChangeImage(null) },
            //     { text: 'No' }
            // ])
        } else {
            console.log('granted')
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: false,
                quality: 0.5,
            });
            if (!result.canceled)
                onChangeImage(result?.assets[0]?.uri)
        } catch (error) {
            console.log('Error reading image', error)
        }
    }

    const handlePress = () => {
        if (!imageUri) {
            selectImage();
        } else {
            Alert.alert('Delete Image', 'Are you sure you want to delete this image?', [
                { text: 'Yes', onPress: () => onChangeImage(null) },
                { text: 'No' }
            ])
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => handlePress()}>
            <View style={styles.constainer} >
                {!imageUri &&
                    <MaterialCommunityIcons color={colors.medium} name='camera' size={40} />
                }
                {imageUri &&
                    <Image source={{ uri: imageUri }} style={styles.image} />
                }
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ImageInput

const styles = StyleSheet.create({
    constainer: {
        marginVertical: 20,
        // marginHorizontal: 10,
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    }
})