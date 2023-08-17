import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import defaultAvatar from "../assets/images/Profile_avatar.png";
import { Card } from "../components/Card";
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/auth/selectors";
import { fetchPosts } from "../redux/posts/operations";
import { getPosts } from "../redux/posts/selectors";

export const PostsScreen = () => {
  // const [posts, setPosts] = useState([])
  // const [login, setLogin] = useState(null)
  // const [email, setEmail] = useState('')
  // const route = useRoute()

  const dispatch = useDispatch()

  useEffect( ()=> {
    dispatch(fetchPosts())
  }, [dispatch])

  const user = useSelector(getUser);
  const posts = useSelector(getPosts)

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 16,}}>
      <View style={styles.userWrapper}>
        <Image style={styles.userPhoto} source={user.photo ? {uri: user.photo} : defaultAvatar}></Image>
        <View >
            <Text style={styles.userName}>{user.login}</Text>
            <Text style={styles.userMail}>{user.email}</Text>
        </View>
      </View>
      <FlatList
      data={posts}
      renderItem={({item}) => <Card {...item}/>}>
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  userWrapper: {
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
    marginBottom: 32
  },
  userPhoto: {
    
    marginRight: 8,
    borderRadius: 16,
    height: 60,
    width: 60,
  },
  userName: {
    fontSize: 13,
    fontFamily: 'Roboto_700Bold',
    color: '#212121'
  },
  userMail: {
    fontSize: 11,
    fontFamily: 'Roboto_400Regular',
    color: 'rgba(33, 33, 33, 0.80)'
  },
  footerWrapper:{
    flexDirection: 'row',
    gap: 31,
    alignItems:'center',
    justifyContent: 'space-evenly',
    borderTopColor: "#BDBDBD",
    borderTopWidth: 1,
    paddingTop: 9,
    paddingBottom: 34,
    
  }
});
