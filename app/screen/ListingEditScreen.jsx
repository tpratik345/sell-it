import { StyleSheet } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, AppFormImagePicker, AppFormPicker, SubmitButton } from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.string().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, "Please select at least 1 image")
})

const categories = [
    { backgroundColor: "#fc5c65", icon: "floor-lamp", label: "Furniture", value: 1, },
    { backgroundColor: "#fd9644", icon: "car", label: "Cars", value: 2, },
    { backgroundColor: "#fed330", icon: "camera", label: "Cameras", value: 3, },
    { backgroundColor: "#26de81", icon: "cards", label: "Games", value: 4, },
    { backgroundColor: "#2bcbba", icon: "shoe-heel", label: "Clothing", value: 5, },
    { backgroundColor: "#45aaf2", icon: "basketball", label: "Sports", value: 6, },
    { backgroundColor: "#4b7bec", icon: "headphones", label: "Movies & Music", value: 7, },
    { backgroundColor: "#a55eea", icon: "book-open-variant", label: "Books", value: 8, },
    { backgroundColor: "#778ca3", icon: "application", label: "Other", value: 9, },
];

const ListingEditScreen = () => {
    const location = useLocation();

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null,
                    images: []
                }}
                validationSchema={validationSchema}
                onSubmit={(value) => console.log(value, location)}
            >
                <AppFormImagePicker name={'images'}/>
                <AppFormField
                    maxLength={255}
                    name={'title'}
                    placeholder={'Title'} />
                <AppFormField
                    keyboardType='numeric'
                    maxLength={8}
                    name={'price'}
                    width={'50%'}
                    placeholder={'Price'} />
                <AppFormPicker
                    items={categories}
                    name='category'
                    placeholder={'Category'}
                    width={'50%'}
                    numberOfColumns={3}
                    PickerItemComponent={CategoryPickerItem} />
                <AppFormField
                    maxLength={255}
                    name={'description'}
                    placeholder={'Description'}
                    numberOfLines={3}
                    multiline={true} />
                <SubmitButton title="Post" />
            </AppForm>
        </Screen>
    )
}

export default ListingEditScreen

const styles = StyleSheet.create({
    container: {}
})