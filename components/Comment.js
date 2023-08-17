import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { getUser } from "../redux/auth/selectors";
import defaultAvatar from "../assets/images/Profile_avatar.png";
import { formatDate } from "../services/formatDate";

export const Comment = ({text, date, author}) => {
  
  const user = useSelector(getUser);

  return author.id === user.id ? (
    <View style={{ flexDirection: "row", justifyContent:"flex-end" }}>
      <View style={[styles.container, { marginRight: 16, borderTopLeftRadius:6 }]}>
        <Text style={{ fontSize: 13 }}>{text}</Text>
        <Text style={[styles.date, { textAlign: "left" }]}>
          {formatDate(date)}
        </Text>
      </View>

      <Image source={user.photo ? {uri: user.photo} : defaultAvatar} style={styles.avatar}/>
    </View>
  ) : (
    <View style={{ flexDirection: "row", justifyContent:"flex-start" }}>
      <Image
        source={author.avatar ? {uri: author.avatar} : defaultAvatar}
        style={[styles.avatar, {borderRadius: 50, marginRight: 16 }]}
      />
      <View style={[styles.container, { borderTopRightRadius:6 }]}>
        <Text style={{ fontSize: 13 }}>{text}</Text>
        <Text style={[styles.date, { textAlign: "right" }]}>
        {formatDate(date)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 50,
  },
  container: {
    padding: 16, 
    marginBottom: 24, 
    backgroundColor: "rgba(0, 0, 0, 0.03)", 
    borderBottomLeftRadius: 6, 
    borderBottomRightRadius:6, 
  },
  date:{
    fontSize: 10, 
    color: "#BDBDBD", 
  }
})