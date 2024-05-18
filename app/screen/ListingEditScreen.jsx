import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, AppFormPicker } from '../components/forms'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.string().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.string().required().nullable().label('Category')
})

const categories = [
    { label: 'Furniture', value: 1 },
    { label: 'Clothing', value: 2 },
    { label: 'Cameras', value: 3 },
]

const ListingEditScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                }}
                validationSchema={validationSchema}
                onSubmit={(value) => console.log(value)}
            >
                <AppFormField maxLength={255} name={'title'} placeholder={'Title'} />
                <AppFormField keyboardType='numeric' maxLength={8} name={'price'} placeholder={'Price'} />
                <AppFormPicker items={categories} name='category' placeholder={'Category'} />
                <AppFormField maxLength={255} name={'description'} placeholder={'Description'} numberOfLines={3} multiline={true} />
            </AppForm>
        </Screen>
    )
}

export default ListingEditScreen

const styles = StyleSheet.create({
    container: {}
})