import { KeyboardAvoidingView, TouchableWithoutFeedback, ImageBackground, Keyboard } from "react-native";
import { LoginForm } from "../components/LoginForm";
import bgImage from '../assets/images/Photo_BG.jpg'

export const LoginScreen = () => {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
          }}
        >
          <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
        >
          <LoginForm/>
        </ImageBackground>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  };