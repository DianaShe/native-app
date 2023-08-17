import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ImageBackground,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { LoginForm } from "../components/LoginForm";
import bgImage from "../assets/images/Photo_BG.jpg";
import { useSelector } from "react-redux";
import { getAuthInProgress } from "../redux/auth/selectors";

export const LoginScreen = () => {
  const authInProgress = useSelector(getAuthInProgress);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {authInProgress ? (
        <ActivityIndicator size="large" color="#FF6C00" style={{ flex: 1 }} />
      ) : (
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
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
              justifyContent: "flex-end",
            }}
          >
            <LoginForm />
          </ImageBackground>
        </KeyboardAvoidingView>
      )}
    </TouchableWithoutFeedback>
  );
};
