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
} from "react-native";
import examplePhoto from "../assets/images/Rectangle23.jpg";
import avatar1 from "../assets/images/Ellipse.jpg";
import avatar2 from "../assets/images/Ellipse2.jpg";
import { CommentLeft } from "../components/CommentLeft";
import { CommentRight } from "../components/CommentRight";
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react";

export const CommentsScreen = () => {
    const [comment, setComment] = useState('');

    const handleSubmit = () => {
        console.log(comment)
        setComment('')
    }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView
    >
      <ImageBackground source={examplePhoto} style={styles.image} />
      <View style={styles.commentWrapper}>
        <Image
          source={avatar1}
          height={28}
          weight={28}
          style={{ marginRight: 16 }}
        />
        <View style={{ padding: 16, width: 299 }}>
          <Text style={styles.text}>Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!</Text>
          <Text style={[styles.date, { textAlign: "right" }]}>
          09 червня, 2020 | 08:40
          </Text>
        </View>
      </View>
      <View style={styles.commentWrapper}>
        <View style={{ padding: 16, width: 299 }}>
          <Text style={styles.text}>
            A fast 50mm like f1.8 would help with the bokeh. I’ve been using
            primes as they tend to get a bit sharper images.
          </Text>
          <Text style={[styles.date, { textAlign: "left" }]}>
            09 червня, 2020 | 09:14
          </Text>
        </View>
        <Image source={avatar2} height={28} width={28} />
      </View>
      {/* <CommentLeft photo={avatar1} 
            text="Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!" 
            date="09 червня, 2020 | 08:40"/>
            <CommentRight photo={avatar2} 
            text="A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images." 
            date="09 червня, 2020 | 09:14"/> */}
    </ScrollView>
    <View style={{}}>
        <TextInput placeholder="Коментувати..." style={styles.input} onChangeText={setComment} value={comment}/>
        <Pressable style={styles.iconSend} onPress={handleSubmit}>
            <Ionicons name="arrow-up-circle" size={34} color="#FF6C00" />
        </Pressable>
        
    </View>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 
    },
  image: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    overflow: "hidden",
    borderRadius: 8,
    marginVertical: 32,
  },
  commentWrapper: {flexDirection: "row", marginBottom: 24},
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
    lineHeight: 19
  },
  iconSend: {
    position: 'absolute',
    top: 8,
    right: 8,
  }
});
