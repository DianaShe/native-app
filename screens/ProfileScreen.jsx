import React from 'react'
import { Text, View, ImageBackground, FlatList, StyleSheet } from 'react-native'
import bgImage from '../assets/images/Photo_BG.jpg'
import { Avatar } from '../components/Avatar'
import { Card } from '../components/Card'
import examplePhoto from '../assets/images/Rectangle23.jpg'



function ProfileScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      

    }}>
      <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{
            flex: 1,
            
          }}
        >
          <View style={styles.wrapper}>
            <Avatar />
            <Text style={styles.title}>Natali Romanova</Text>
            <FlatList
            data={[{ title: 'Ліс', location: 'here', comments: 6, likes: 153 }]}
            renderItem={({item}) => <Card {...item}/>}
            />

          </View>
        </ImageBackground>
      </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 'auto'
    
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
})