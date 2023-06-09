import { Dimensions, ImageBackground, SafeAreaView, StyleSheet, View } from "react-native";
import bgImage from "../images/Photo_BG.jpg";

export const RegistrationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
        <View style={styles.formWrapper}></View>
        <View style={styles.avatar}></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
  },
  formWrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '66%',
  },
  avatar: {
    position: 'absolute',
    top: 160,
    left: Dimensions.get('window').width / 2 - 60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#F6F6F6',
    // border: 1px solid #000000;
    
    
    boxShadow: '0, 4, 4, rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  }
});
