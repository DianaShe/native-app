import { Pressable, Text, StyleSheet } from "react-native";
// import { useNavigation } from '@react-navigation/native';

export const IsAccount = ({ text, underlinedText, onPress}) => {
  // const navigation = useNavigation();

  return (
    <Pressable style={styles.linkText} onPress={onPress}
    // onPress={() => navigation.navigate("Login")}
    >
      <Text style={{ color: "#1B4371", fontSize: 16}}>{text}</Text>
      <Text style={{ color: "#1B4371", fontSize: 16, textDecorationLine: "underline" }}>
        {underlinedText}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  linkText: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 16,
    
  },
});
