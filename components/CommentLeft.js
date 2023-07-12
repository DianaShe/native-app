import { Image, Text, View } from "react-native"

export const CommentLeft = (photo, text, date) => {
    return (
        <View style={{flexDirection: 'row',}}>
                <Image source={photo} height={28} weight={28} style={{marginRight: 16}}/>
                <View style={{padding: 16, width: 299}}>
                    <Text style={{fontSize: 13}}>{text}</Text>
                    <Text style={{fontSize: 10, color: "#BDBDBD", textAlign: 'right'}}>{date}</Text>

                </View>
        </View>
    )
}