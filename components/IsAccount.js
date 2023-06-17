import { Pressable, Text, StyleSheet } from "react-native"

export const IsAccount = ({text, underlinedText}) => {
    return (
        <Pressable style={styles.linkText}>
          <Text style={{color:'#1B4371'}}>{text}</Text>
          <Text style={{color:'#1B4371', textDecorationLine: 'underline'}}>{underlinedText}</Text>
      </Pressable>
    )
}

const styles = StyleSheet.create({
    linkText: {
      flexDirection:'row', alignSelf:'center', marginTop: 16,
        
        // textDecorationLine: 'underline'
      }
})