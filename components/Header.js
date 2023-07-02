import { Pressable, StyleSheet, Text, View } from "react-native"

export const Header = ({title, iconRight, iconLeft}) => {
    return (
        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.iconRight}>
          {iconRight}
        </Pressable>
        <Pressable style={styles.iconLeft}>
          {iconLeft}
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 27,
        marginBottom: 32,
        borderBottomColor: "#BDBDBD",
        borderBottomWidth: 1,
      },
      title: {
        fontSize: 17,
        fontFamily: "Roboto_500Medium",
        paddingVertical: 11,
        alignSelf: "center",
      },
      iconRight: {
        position: "absolute",
        top: 10,
        right: 10,
      },
      iconLeft: {
        position: "absolute",
        top: 10,
        left: 10,
      }
})