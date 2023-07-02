import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const SubmitButton = ({ text, onPress, disabled }) => {

  return (
    <TouchableOpacity style={disabled ? styles.button_disabled : styles.button} onPress={onPress}>
      <Text style={disabled ? styles.buttonTitle_disabled : styles.buttonTitle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 32,
    paddingVertical: 15,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    // marginTop: 43,
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    fontFamily: "Roboto_400Regular",
  },
  button_disabled: {
    paddingHorizontal: 32,
    paddingVertical: 15,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    alignItems: "center",
},
buttonTitle_disabled: {
    color: '#BDBDBD',
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto_400Regular",
}
});
