import { View, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import defaultAvatar from "../assets/images/Profile_avatar.png";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/auth/selectors";
import * as ImagePicker from 'expo-image-picker';
import {updateUser} from "../redux/auth/operations"


export const Avatar = () => {
  
  const [avatar, setAvatar] = useState(null);

  const user = useSelector(getUser);
  console.log(user)
  const dispatch = useDispatch()

  useEffect(()=> {
    if (user.photo) {
      setAvatar(user.photo)
    }  
    
  }, [])

  
  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled) {
     
      setAvatar(result.assets[0].uri);
      dispatch(updateUser({photoURL: result.assets[0].uri}))
    }
  };

  return (
    <View style={styles.avatar}>
      <Image style={styles.userPhoto} source={avatar ? {uri:avatar} : defaultAvatar}></Image>
      {avatar ? (
        <AntDesign
          name="closecircleo"
          style={styles.icon}
          size={25}
          color="grey"
          onPress={changeAvatar}
        />
      ) : (
        <AntDesign
          style={styles.icon}
          name="pluscircleo"
          size={25}
          color="#FF6C00"
          onPress={changeAvatar}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  userPhoto: {
    borderRadius: 16,
    resizeMode: "contain",
    width: 120,
    height: 120,
  },
  icon: {
    position: "absolute",
    right: -13,
    bottom: 20,
    backgroundColor: "#ffffff",
    borderRadius: 50,
  },
});
