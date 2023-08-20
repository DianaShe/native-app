import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/posts/operations";
import { getUser } from "../redux/auth/selectors";
import { SubmitButton } from "../components/SubmitButton";
import { getIsLoading } from "../redux/posts/selectors";

export const CreatePostsScreen = () => {
  const [photoUri, setPhotoUri] = useState("");
  const [title, setTitle] = useState("");
  const [locationTitle, setLocationTitle] = useState("");
  // const [location, setLocation] = useState(null)
  const navigation = useNavigation();
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] =
    MediaLibrary.usePermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const [status, requestLocationPermission] =
    Location.useBackgroundPermissions();

  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    requestCameraPermission();
    requestLibraryPermission();
  }, []);

  const handleSubmit = async () => {
    requestLocationPermission();

    if (!status.granted) {
      Alert.alert("Немає дозволу на визначення місцезнаходження");
    }

    let location = null;

    if (status.granted) {
      const currentLocation = await Location.getCurrentPositionAsync();
      const coords = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };
      location = coords;
    }

    if (!title || !locationTitle) {
      return Alert.alert("Вкажіть назву та місцевість");
    }

    dispatch(
      addPost({
        photoUri,
        title,
        location,
        locationTitle,
        author: user.id,
        likes: [],
        comments: [],
      })
    ).then(() => {
      navigation.navigate("Posts");
      setPhotoUri("");
      setTitle("");
      setLocationTitle("");
    });
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

  const choosePhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: false,
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#FF6C00" style={{ flex: 1 }} />
      ) : (
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
            <Text style={styles.label} onPress={choosePhoto}>
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
      )}
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
