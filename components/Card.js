import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import examplePhoto from '../assets/images/Rectangle23.jpg'

export const Card = ({ photo=examplePhoto, title, comments, location, likes }) => {
  return (
    <View style={{marginBottom: 34}}>
      <ImageBackground source={photo} style={styles.image}/>
      <Text style={{color:"#212121", fontFamily: "Roboto_500Medium",fontSize: 16, marginBottom: 8, lineHeight: 19, marginTop: 5}}>{title}</Text>
      <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
        <View style={{flexDirection: "row"}}>
            {comments === 0 ? <MaterialCommunityIcons name="message-reply-outline" size={24} 
          color="#BDBDBD" /> : <MaterialCommunityIcons name="message-reply" size={24} color="#FF6C00" />} 
        
          <Text style={{color:"#212121", fontFamily: 'Roboto_400Regular',fontSize: 16, marginRight: 24, marginLeft: 6}}>{comments}</Text>
          {likes && <Feather name="thumbs-up" size={24} color="#FF6C00" />} 
          <Text style={{color:"#212121", fontFamily: 'Roboto_400Regular',fontSize: 16, marginLeft: 6}}>{likes}</Text>
        </View>
        <View style={{flexDirection: "row"}}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={24}
            color="#BDBDBD"
          />
          <Text style={{color:"#212121", textDecorationLine: 'underline', fontFamily: 'Roboto_400Regular',fontSize: 16, marginLeft: 6}}>{location}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    image: {
        width: "100%", 
        height: 240,
        resizeMode: 'cover',
        overflow: 'hidden',
        borderRadius: 8,
      },
})