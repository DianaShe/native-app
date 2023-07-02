import {
  ImageBackground,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Header } from "../components/Header";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import { useState } from "react";
import { SubmitButton } from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  const [isPost, setIsPost] = useState(false);
  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingHorizontal: 16, backgroundColor: 'fff' }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            {isPhotoLoaded && <ImageBackground />}
          </View>

          <Pressable style={styles.iconContainer}>
            <MaterialIcons
              style={styles.icon}
              name="photo-camera"
              size={24}
              color="#BDBDBD"
              
            />
          </Pressable>
          <Text style={styles.label}>
            {isPhotoLoaded ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </View>
        <TextInput style={[styles.input, {fontFamily: "Roboto_500Medium"}]} placeholder="Назва..." />
        <View style={{}}>
          <TextInput
            style={[styles.input, { paddingLeft: 28 }]}
            placeholder="Місцевість..."
          />
          <MaterialCommunityIcons
            style={styles.iconMap}
            name="map-marker-outline"
            size={24}
            color="#BDBDBD"
            onPress={() => navigation.navigate('Map')}
          />
        </View>
       
        <SubmitButton text="Опублікувати" disabled={!isPost} />
        {/* <View style={{ width: 100, marginRight: "auto", marginLeft: "auto" }}>
          <SubmitButton
            text={<AntDesign name="delete" size={24} color="#BDBDBD" />}
            disabled={!isPost}
          />
        </View> */}
        <Pressable style={styles.buttonDelete}>
          <AntDesign name="delete" size={24} color="#BDBDBD" />
        </Pressable>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  wrapper: {
    marginVertical: 32,
  },
  iconContainer: {
    position: "absolute",
    top: 90,
    right: 142,
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 50,
  },
  icon: {
    alignSelf: "center",
    marginBottom: "auto",
    marginTop: "auto",
  },
  label: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  input: {
    height: 50,
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    fontSize: 16,
    marginBottom: 16,
    fontFamily: "Roboto_400Regular",
  },
  iconMap: {
    position: "absolute",
    top: 13,
  },
  buttonDelete: {
    backgroundColor: "#F6F6F6",
    paddingHorizontal: 23,
    paddingVertical: 8,
    borderRadius: 20,
    width: 70,
    marginRight: "auto", 
    marginLeft: "auto",
    marginTop: 'auto',
    marginBottom: 22
  },
});
