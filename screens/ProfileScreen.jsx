import {
  Text,
  View,
  ImageBackground,
  FlatList,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import bgImage from "../assets/images/Photo_BG.jpg";
import { Avatar } from "../components/Avatar";
import { Card } from "../components/Card";
import { getUser } from "../redux/auth/selectors";
import { getPosts } from "../redux/posts/selectors";

function ProfileScreen() {
  const user = useSelector(getUser);
  const posts = useSelector(getPosts).filter((post) => post.author === user.id);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View style={styles.wrapper}>
          <Avatar />
          <Text style={styles.title}>{user.login}</Text>
          <FlatList
            data={posts}
            renderItem={({ item }) => <Card {...item} />}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "80%",
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: "auto",
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    fontWeight: 500,
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    color: "#212121",
    alignSelf: "center",
  },
});
