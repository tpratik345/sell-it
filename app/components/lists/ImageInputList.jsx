import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from '../ImageInput'

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
    const scrollViewRef = useRef();

    return (
        <View>
            {/* The above view is added because by default view will cover the content present in it */}
            {/* The scrollview was taking the whole content */}
            <ScrollView
                ref={scrollViewRef}
                horizontal={true}
                onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}>
                <View style={styles.constainer}>
                    {imageUris?.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput
                                imageUri={uri}
                                onChangeImage={() => onRemoveImage(uri)}
                            />
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    )
}

export default ImageInputList

const styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 10
    }
})