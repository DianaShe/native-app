import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { SubmitButton } from "./SubmitButton";
import { Avatar } from "./Avatar";
import { IsAccount } from "./IsAccount";
import { useState } from "react";

export const RegistrationForm = () => {
  const [isLoginFocused, setIsLoginFocused] = useState(false)
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log({login, email, password})
    setLogin('')
    setEmail('')
    setPassword('')
  }

  return (
    
      <View style={styles.formWrapper}>
        <Avatar />
        <Text style={styles.formTitle}>Реєстрація</Text>
        <TextInput placeholder="Логін" style={isLoginFocused ? [styles.input, styles.focusedInput] : styles.input} 
          inputMode="text" onFocus={() => setIsLoginFocused(true)}
          onBlur={() => setIsLoginFocused(false)}
          onChangeText={setLogin}
          value={login}
          />
        <TextInput
          style={isEmailFocused ? [styles.input, styles.focusedInput] : styles.input} 
          placeholder="Адреса електронної пошти"
          inputMode="email"
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}
          onChangeText={setEmail}
          value={email}
        />
        <View>
        <TextInput
          style={isPasswordFocused ? [ styles.focusedInput, styles.input, {marginBottom: 43}] : [styles.input, {marginBottom: 43}]}
          secureTextEntry
          placeholder="Пароль"
          inputMode="text"
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          onChangeText={setPassword}
          value={password}
        />
        
          <Pressable style={styles.showButton}>
            <Text style={styles.showText}>Показати</Text>
          </Pressable>
        </View>
        <SubmitButton text="Зареєструватися" onPress={handleRegister}/>
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
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 15,
    height: 50,
    fontSize: 16,
  },
  focusedInput: {
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 8,
    borderStyle: 'solid',
  },
  showButton: {
    position: "absolute",
    top: 10,
    right:16,
  },
  showText: {
    color: "#1B4371",
    fontSize: 16,
  },
});

