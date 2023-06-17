import {
  Pressable,
  ScrollView,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image
} from "react-native";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";
import userPhoto from '../assets/images/User_Photo.jpg'
import { SubmitButton } from "../components/SubmitButton";

export const PostsScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <Pressable style={styles.icon}>
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </Pressable>
      </View>
      <View style={styles.userWrapper}>
        <Image style={styles.userPhoto} source={userPhoto}></Image>
        <View >
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userMail}>Email</Text>
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <AntDesign name="appstore-o" size={40} color="#BDBDBD" />   
        <SubmitButton text={<AntDesign name="plus" size={20} color="#FFFfff" />}/>
        <Feather name="user" size={40} color="#BDBDBD" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 55,
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 17,
    fontFamily: "Roboto_500Medium",
    paddingVertical: 11,
    alignSelf: "center",
  },
  icon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  userWrapper: {
    flexDirection: 'row',
    marginTop: 32,
  },
  userPhoto: {
    marginLeft: 16,
    marginRight: 8,
    borderRadius: 16,
    height: 60,
    width: 60,
  },
  userName: {
    fontSize: 13,
    fontFamily: 'Roboto_700Bold',
  },
  userMail: {
    fontSize: 13,
    fontFamily: 'Roboto_400Regular',
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
    marginTop: 'auto',
  }
});
