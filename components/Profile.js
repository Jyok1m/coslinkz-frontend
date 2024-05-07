import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Profile(props) {
  return (
    <View className="m-1.5">
        <Image className="w-28 h-32" source={props.photo}/>
    </View>
  )
}