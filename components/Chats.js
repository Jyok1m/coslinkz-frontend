import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Chats(props) {
  return (
    <TouchableOpacity>
      <View className="w-11/12 flex-row border rounded-3xl m-4 p-4 items-center bg-gray-200">
        <View>
            <Image className="w-12 h-12 rounded-full" source={props.avatar} alt="avatar"/>
        </View>
        <View className="ml-2">
            <Text className="font-bold">{props.name}</Text>
            <Text className="">{props.message}</Text>
        </View>
        </View>
    </TouchableOpacity>
  )
}