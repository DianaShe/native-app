import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  SafeAreaView,
  Pressable,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Comment } from "../components/Comment";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { auth } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../redux/posts/operations";
import { getIsLoading, getPosts } from "../redux/posts/selectors";
import { nanoid } from "@reduxjs/toolkit";

export const CommentsScreen = ({ route }) => {
  const { photo, photoId } = route.params;

  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const posts = useSelector(getPosts);
  const isLoading = useSelector(getIsLoading);

  const comments = posts.find(({ id }) => id === photoId)?.comments ?? [];
 
  const handleSubmit = () => {
    const postComment = {
      text: comment,
      date: Date.now(),
      author: { id: auth.currentUser.uid, avatar: auth.currentUser.photoURL },
      id: photoId,
    };
    
    dispatch(addComment(postComment));
    setComment("");
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground source={{ uri: photo }} style={styles.image} />
        {isLoading ? (
          <ActivityIndicator size="large" color="#FF6C00" style={{ flex: 1 }} />
        ) : (
          <View>
            {comments &&
              comments.map((item) => <Comment {...item} key={nanoid()} />)}
          </View>
        )}
      </ScrollView>
      <View style={{}}>
        <TextInput
          placeholder="Коментувати..."
          style={styles.input}
          onChangeText={setComment}
          value={comment}
        />
        <Pressable style={styles.iconSend} onPress={handleSubmit}>
          <Ionicons name="arrow-up-circle" size={34} color="#FF6C00" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 8,
    marginVertical: 32,
  },
  commentWrapper: { flexDirection: "row", marginBottom: 24 },
  text: {
    fontSize: 13,
    marginBottom: 8,
  },
  date: {
    fontSize: 10,
    color: "#BDBDBD",
  },
  input: {
    height: 50,
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    color: "#212121",
    paddingLeft: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    lineHeight: 19,
  },
  iconSend: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
