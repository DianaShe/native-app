import { ImageBackground, Pressable, StyleSheet, TextInput, View, Text } from "react-native"
import { Header } from "../components/Header"
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

export const CreatePostsScreen =() => {
    const [isPhotoLoaded, setIsPhotoLoaded] = useState(false)
    return (
        <View style={{ flex: 1, paddingHorizontal: 16 }}>
            <Header title='Створити публікацію' />
            <View>
                <View style={styles.imageContainer}>
                    {isPhotoLoaded && <ImageBackground/>}
                </View>
                
                <Pressable style={styles.iconContainer}>
                    <MaterialIcons style={styles.icon} name="photo-camera" size={24} color="#BDBDBD" />
                </Pressable>
                <Text>{isPhotoLoaded ? 'Редагувати фото' : 'Завантажте фото'}</Text>
            </View>
            <TextInput placeholder="Назва"/>
            <TextInput placeholder="Місцевість"/>

        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 240,
        backgroundColor: '#F6F6F6',
        borderRadius:8,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: "#E8E8E8",
    },
    iconContainer: {
        position: 'absolute',
        top: 90,
        right: 142,
        width: 60,
        height: 60,
        backgroundColor: "#FFF",
        borderRadius: 50,
    },
    icon: {
        alignSelf: 'center',
        
    },
    input: {
        height: 50,

    }
})