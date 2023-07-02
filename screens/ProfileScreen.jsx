import React from 'react'
import { Text, View, ImageBackground, FlatList } from 'react-native'
import bgImage from '../assets/images/Photo_BG.jpg'

function ProfileScreen() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: 'flex-end'

    }}>
      <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{
            flex: 1,
            
          }}
        />
      </View>
  )
}

export default ProfileScreen
