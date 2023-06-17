import { TextInput, View, StyleSheet, Pressable, Text } from "react-native";
import { SubmitButton } from "./SubmitButton";
import { IsAccount } from "./IsAccount";
import { useState } from "react";

export const LoginForm = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)

  return (
    <View style={styles.formWrapper}>
        <Text style={styles.formTitle}>Увійти</Text>
        <TextInput style={isEmailFocused ? [styles.focusedInput, styles.input] : styles.input}
          placeholder="Адреса електронної пошти"
          inputMode="email"
          onFocus={() => setIsEmailFocused(true)}
          onBlur={() => setIsEmailFocused(false)}/>
        <TextInput style={isPasswordFocused ? [styles.focusedInput, styles.input, {marginBottom: 43} ] : [styles.input, {marginBottom: 43}]} secureTextEntry
          placeholder="Пароль"
          inputMode="text"
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}/>
        <View>
        <Pressable style={styles.showButton}>
          <Text style={styles.showText}>Показати</Text>
        </Pressable>
        </View>
      <SubmitButton text="Увійти" />
      <IsAccount text='Немає аккаунту? ' underlinedText='Зареєструватися' />

    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '55%',
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 'auto'
    
  },
  formTitle: {
    marginTop: 32,
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