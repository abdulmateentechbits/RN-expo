import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Divider, TextInput, Text } from 'react-native-paper'
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import Button from '@/src/components/Button';

import Colors from '@/src/constants/Colors';
import { Stack } from 'expo-router';
const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const bgImage = "https://img.freepik.com/free-vector/pizza_1176-232.jpg";

const create = () => {
    const [image, setImage] = useState<string | null>();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const [errors, setErrors] = useState("");

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }

    const validateInput = () => {
        if (!name.trim()) {
            setErrors("Name is required");
            return false;
        }
        if (!price) {
            setErrors("Price is required");
            return false;
        }
        if (isNaN(parseFloat(price))) {
            setErrors("Price must be a number");
            return false;
        }
        return true
    }

    const resetFields = () => {
        setName("");
        setPrice("");
        setErrors("");
    }

    const onCreate = () => {
        if (!validateInput()) {
            return;
        }

        console.log("Create Product!  ");
        resetFields()
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: "Create Product" }} />
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={image || bgImage}
                    placeholder={blurhash}
                    contentFit="cover"
                    transition={1000}
                />
                <Text variant='labelLarge' onPress={pickImage} style={{ color: Colors.light.tint }}>Select Image</Text>
            </View>
            <View style={{ rowGap: 10 }}>
                <TextInput
                    mode='outlined'
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    mode='outlined'
                    label="Price"
                    placeholder='99.99'
                    value={price}
                    onChangeText={text => setPrice(text)}
                    keyboardType='numeric'
                />
                {
                    errors ? (
                        <Text style={{ color: 'red' }}>{errors}</Text>
                    ) : null
                }
                <Button text='Create' onPress={onCreate} />
            </View>
        </View>
    )
}

export default create

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        rowGap: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 10
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        backgroundColor: '#0553',
        borderRadius: 100
    },
})