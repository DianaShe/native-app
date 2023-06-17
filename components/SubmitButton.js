import { Pressable, Text, StyleSheet } from "react-native";

export const SubmitButton = ({ text }) => {
  return (
    <Pressable style={styles.button}>
      <Text style={styles.buttonTitle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 15,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    fontFamily: "Roboto_400Regular",
  },
});
