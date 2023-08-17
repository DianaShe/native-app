import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { manageLike } from "../redux/posts/operations";
import { getUser } from "../redux/auth/selectors";

export const Card = ({
  photo,
  title,
  location,
  locationTitle,
  comments = [],
  likes = [],
  id: photoId,
}) => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const user = useSelector(getUser)

  return (
    <View style={{ marginBottom: 34 }}>
      
      <ImageBackground source={{uri: photo}} style={styles.image} />
      <Text
        style={{
          color: "#212121",
          fontFamily: "Roboto_500Medium",
          fontSize: 16,
          marginBottom: 8,
          lineHeight: 19,
          marginTop: 5,
        }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          {comments.length === 0 ? (
            <MaterialCommunityIcons
              name="message-reply-outline"
              size={24}
              color="#BDBDBD"
              onPress={() => navigation.navigate('Comments', {photo, photoId})}
            />
          ) : (
            <MaterialCommunityIcons
              name="message-reply"
              size={24}
              color="#FF6C00"
              onPress={() => navigation.navigate('Comments', {photo, photoId})}
            />
          )}

          <Text
            style={{
              color: "#212121",
              fontFamily: "Roboto_400Regular",
              fontSize: 16,
              marginRight: 24,
              marginLeft: 6,
            }}
          >
            {comments.length}
          </Text>
          <Feather name="thumbs-up" size={24} color="#FF6C00" onPress={() => {dispatch(manageLike({photoId, userId: user.id}))}}/>
          <Text
            style={{
              color: "#212121",
              fontFamily: "Roboto_400Regular",
              fontSize: 16,
              marginLeft: 6,
            }}
          >
            {likes.length}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color="#BDBDBD"
            onPress={()=> {navigation.navigate('Map', {location, locationTitle})}}
          />
          <Text
            style={{
              color: "#212121",
              textDecorationLine: "underline",
              fontFamily: "Roboto_400Regular",
              fontSize: 16,
              marginLeft: 6,
            }}
          >
            {locationTitle}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 8,
  },
});
