import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ImageBackground
} from "react-native";
import { RegistrationForm } from "../components/RegistrationForm";
import bgImage from "../assets/images/Photo_BG.jpg"

export const RegistrationScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView  style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <RegistrationForm/>  
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
