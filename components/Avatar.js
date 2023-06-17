import { View, StyleSheet, Image } from "react-native"
import { AntDesign } from '@expo/vector-icons'; 
import userPhoto from '../assets/images/User_Photo.jpg'
import { useState } from "react";


export const Avatar =() => {
    const [isPhotoLoaded, setIsPhotoLoaded] = useState(true)
    
    return (
        
            <View style={styles.avatar}>
                {isPhotoLoaded ? <View>
                    <Image style={styles.userPhoto} source={userPhoto}></Image> 
                    <AntDesign name="closecircleo" style={styles.icon} size={25} color="grey" />
                </View> : <AntDesign style={styles.icon} name="pluscircleo" size={25} color="#FF6C00" />}   
            </View>
            
    
    )
}

const styles = StyleSheet.create({
    avatar: {
        position: "absolute",
        top: -60,
        alignSelf: 'center',
        width: 120,
        height: 120,
        borderRadius: 16,
        backgroundColor: "#F6F6F6",
        // border: 1px solid #000000;
    
        // boxShadow: "0, 4, 4, rgba(0, 0, 0, 0.25)",
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 4,
        shadowColor: "rgba(0, 0, 0, 0.25)",
      },
    userPhoto : {
        borderRadius: 16,
        resizeMode: 'contain',
        width: 120,
        height: 120,
    },  
      icon: {
        position:'absolute',
        right: -13,
        bottom: 20,
      },
})