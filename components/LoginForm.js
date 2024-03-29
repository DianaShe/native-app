import { TextInput, View, StyleSheet, Pressable, Text, Alert } from "react-native";
import { SubmitButton } from "./SubmitButton";
import { IsAccount } from "./IsAccount";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { logIn } from "../redux/auth/operations";
import { useDispatch } from "react-redux";
import { getRealPhotoURL } from "../services/uploadFile";

export const LoginForm = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const navigation = useNavigation();
  const dispatch = useDispatch()

  const handleLogIn = () => {
    dispatch(logIn({email, password})).then((res)=> {
      if (res.type === "auth/login/fulfilled") {
        setEmail("");
        setPassword("");
        navigation.navigate("Home");
      } else {
       Alert.alert(
      'Логін або пароль невірний')}
    })

  }

  const handleFocus = (name) => {
    switch (name) {
      case 'email':
        setIsEmailFocused(true)
        break;
      case 'password':
        setIsPasswordFocused(true)
        break;
      default:
        break;
    }
  }

  const handleBlur = (name) => {
    switch (name) {
      case 'email':
        setIsEmailFocused(false)
        break;
      case 'password':
        setIsPasswordFocused(false)
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.formWrapper}>
      <Text style={styles.formTitle}>Увійти</Text>
      <TextInput
        style={[styles.input, isEmailFocused && styles.focusedInput]}
        placeholder="Адреса електронної пошти"
        inputMode="email"
        onFocus={() => handleFocus('email')}
        onBlur={() => handleBlur('email')}
        onChangeText={setEmail}
        value={email}
      />
      <View>
      <TextInput
        style={
          [[styles.input, { marginBottom: 43 }], isPasswordFocused && styles.focusedInput ]
        }
        secureTextEntry={!showPassword}
        placeholder="Пароль"
        inputMode="text"
        onFocus={() => handleFocus('password')}
        onBlur={() => handleBlur('password')}
        onChangeText={setPassword}
        value={password}
      />
        <Pressable style={styles.showButton} onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showText}>Показати</Text>
        </Pressable>
      </View>
      <SubmitButton text="Увійти" onPress = {handleLogIn}/>
      <IsAccount text="Немає аккаунту? " underlinedText="Зареєструватися" onPress={() => navigation.navigate("Registration")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "60%",
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: "auto",
  },
  formTitle: {
    marginTop: 32,
    marginBottom: 32,
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
    backgroundColor: "#F6F6F6",
		borderColor: "#E8E8E8",
		borderWidth: 1,
		borderRadius: 8,
    
  },
  focusedInput: {
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 8,
    borderStyle: 'solid',
    backgroundColor: "#FFF",
    shadowColor:'rgba(0, 0, 0, 0.25)',
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4},
  },
  showButton: {
    position: "absolute",
    top: 12,
    right: 16,
  },
  showText: {
    color: "#1B4371",
    fontSize: 16,
    
  },
});
