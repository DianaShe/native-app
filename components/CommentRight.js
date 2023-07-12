import { Image, Text, View } from "react-native"

export const CommentRight = (photo, text, date) => {
    return (
        <View style={{flexDirection: 'row',}}>
                <View style={{padding: 16, width: 299, marginRight: 16}}>
                    <Text style={{fontSize: 13}}>{text}</Text>
                    <Text style={{fontSize: 10, color: "#BDBDBD", textAlign: 'right'}}>{date}</Text>

                </View>
                <Image source={photo} height={28} weight={28} />
                
        </View>
    )
}