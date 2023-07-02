import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import userPhoto from '../assets/images/User_Photo.jpg'

export const PostsScreen = () => {
 
  return (
    <View style={{ flex: 1, backgroundColor: "fff"}}>
      <View style={styles.userWrapper}>
        <Image style={styles.userPhoto} source={userPhoto}></Image>
        <View >
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.userMail}>Email</Text>
        </View>
      </View>
      <FlatList>
        <View>

        </View>
      </FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
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
