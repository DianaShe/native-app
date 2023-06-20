import { Pressable, StyleSheet, Text, View } from "react-native"

export const Header = ({title, icon}) => {
    return (
        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.icon}>
          {icon}
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 55,
        borderBottomColor: "#BDBDBD",
        borderBottomWidth: 1,
      },
      title: {
        fontSize: 17,
        fontFamily: "Roboto_500Medium",
        paddingVertical: 11,
        alignSelf: "center",
      },
      icon: {
        position: "absolute",
        top: 10,
        right: 10,
      },
})