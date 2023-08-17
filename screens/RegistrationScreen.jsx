import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { RegistrationForm } from "../components/RegistrationForm";
import bgImage from "../assets/images/Photo_BG.jpg";
import { useSelector } from "react-redux";
import { getAuthInProgress } from "../redux/auth/selectors";

export const RegistrationScreen = () => {
  const authInProgress = useSelector(getAuthInProgress);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {authInProgress ? (
        <ActivityIndicator size="large" color="#FF6C00" style={{ flex: 1 }} />
      ) : (
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <ImageBackground
            source={bgImage}
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <RegistrationForm />
          </ImageBackground>
        </KeyboardAvoidingView>
      )}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
