import {
  ImageBackground,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import { useState, useEffect } from "react";
import { SubmitButton } from "../components/SubmitButton";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import * as Location from "expo-location";

export const CreatePostsScreen = () => {
  const [photoUri, setPhotoUri] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState(null);
  const [locationTitle, setLocationTitle] = useState("");
  const navigation = useNavigation();
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] =
    MediaLibrary.usePermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [isPhotoLoaded, setIsPhotoLoaded] = useState(false);
  const [status, requestLocationPermission] =
    Location.useBackgroundPermissions();

  useEffect(() => {
    requestCameraPermission();
    requestLibraryPermission();
  }, []);

  const handleSubmit = async () => {
    requestLocationPermission();

    if (!status.granted) {
      console.log("no location permission");
    }

    const currentLocation = await Location.getCurrentPositionAsync();
    const coords = {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    };
    
    setLocation(coords);
    
    if (!title || !locationTitle) {
      return;
    }
    navigation.navigate("Posts", { photoUri, title, location, locationTitle });
    setPhotoUri("");
    // setLocation("");
    setTitle("");
    setLocationTitle("");
  };

  const makeCameraPhoto = async () => {
    if (cameraPermission.granted && libraryPermission.granted && cameraRef) {
      try {
        const { uri } = await cameraRef.takePictureAsync();
        setPhotoUri(uri);
        await MediaLibrary.saveToLibraryAsync(uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1, paddingHorizontal: 16, backgroundColor: "#fff" }}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.wrapper}>
          <View style={styles.imageContainer}>
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.image} />
            ) : (
              <Camera
                style={styles.image}
                type={type}
                ref={setCameraRef}
              ></Camera>
            )}
          </View>

          <Pressable style={styles.iconContainer}>
            <MaterialIcons
              style={styles.icon}
              name="photo-camera"
              size={24}
              color="#BDBDBD"
              onPress={makeCameraPhoto}
            />
          </Pressable>
          <Text style={styles.label}>
            {photoUri ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </View>
        <TextInput
          style={[styles.input, { fontFamily: "Roboto_500Medium" }]}
          placeholder="Назва..."
          onChangeText={setTitle}
          value={title}
        />
        <View style={{}}>
          <TextInput
            style={[styles.input, { paddingLeft: 28 }]}
            placeholder="Місцевість..."
            onChangeText={setLocationTitle}
            value={locationTitle}
          />
          <MaterialCommunityIcons
            style={styles.iconMap}
            name="map-marker-outline"
            size={24}
            color="#BDBDBD"
          />
        </View>

        <SubmitButton text="Опублікувати" onPress={handleSubmit} />

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
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 8,
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
    backgroundColor: "(rgba(255, 255, 255, 0.3))",
    borderRadius: 60,
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
    marginTop: "auto",
    marginBottom: 22,
  },
});
