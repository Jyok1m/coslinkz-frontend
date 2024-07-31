import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";

export default function Posts(props) {

  const [isLiked, setIsLiked] = useState(false)

  let color
  isLiked ? color = "#FF0000" : color = "#000000"
  const handleLiked = () => {
    setIsLiked(!isLiked)
  }

  return (
    <View className="m-4 border border-white rounded-lg pt-2">
      <View className="flex-row ml-2 mb-2">
        <Image
          className="w-11 h-11 rounded-3xl"
          source={props.avatar}
          alt="avatar"
        />
        <Text className="text-base font-bold underline ml-2 text-gray-200">{props.name}</Text>
      </View>
      <View className="w-full flex-row justify-center h-96  ">
        <View className=" w-full drop-shadow-2xl ">
          <Image
            className="w-full h-full aspect-auto rounded-t-lg"
            source={props.photo}
          />
        </View>
      </View>
      <View className="w-full items-center ">
        <View className="flex-column w-full items-center bg-slate-500 rounded-b-lg">
          <View className="flex-row w-full justify-between px-4 py-1.5">
            <View className="flex-row">
              <View className="flex-row">
              <TouchableOpacity onPress={() => handleLiked()}>
                <FontAwesome name="heart" size={25} color={color}/>
              </TouchableOpacity>
              <Text className="mt-2">(0)</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <FontAwesome name="comment-o" size={25} className="pl-4"/>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <TouchableOpacity>
                <FontAwesome name="send" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="py-1.5">
            <Text className="mb-2 text-white">{props.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
