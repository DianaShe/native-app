import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import { SubmitButton } from "./SubmitButton";
import { Avatar } from "./Avatar";
import { IsAccount } from "./IsAccount";
import { useState } from "react";

export const RegistrationForm = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(false)
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)

  return (
    
      <View style={styles.formWrapper}>
        <Avatar />
        <Text style={styles.formTitle}>Реєстрація</Text>
        <TextInput placeholder="Логін" style={isLoginFocused ? [styles.focusedInput, styles.input] : styles.input} inputMode="text" onFocus={() => setIsLoginFocused(true)}
          onBlur={() => setIsLoginFocused(false)}/>
        <TextInput
          style={isEmailFocused ? [styles.focusedInput, styles.input] : styles.input}
          placeholder="Адреса електронної пошти"
          inputMode="email"
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
        />

        <TextInput
          style={isPasswordFocused ? [styles.focusedInput, styles.input, {marginBottom: 43} ] : [styles.input, {marginBottom: 43}]}
          secureTextEntry
          placeholder="Пароль"
          inputMode="text"
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
        <View>
          <Pressable style={styles.showButton}>
            <Text style={styles.showText}>Показати</Text>
          </Pressable>
        </View>
        <SubmitButton text="Зареєструватися" />
        <IsAccount text={"Вже є акаунт? Увійти"} />
      </View>
    
      

  );
};

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '80%',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 'auto'
    
  },
  formTitle: {
    marginTop: 92,
    marginBottom: 32,
    fontWeight: 500,
    fontFamily: "Roboto_500Medium",
    fontSize: 30,
    color: "#212121",
    alignSelf: "center",
  },
  input: {
    width: "100%",
    marginBottom: 16,
    padding: 16,
    height: 50,
    // border: 1px solid #FF6C00
    // borderColor: '#FF6C00',
  },
  focusedInput: {
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 8,
    borderStyle: 'solid',
    paddingHorizontal: 16,
  },
  showButton: {
    position: "absolute",
    top: -82,
    right: 20,
  },
  showText: {
    color: "#1B4371",
  },
});
