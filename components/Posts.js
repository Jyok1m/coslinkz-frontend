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
    <View className="mb-7">
      <View className="flex-row ml-2 mb-2">
        <Image
          className="w-11 h-11 rounded-3xl"
          source={props.avatar}
          alt="avatar"
        />
        <Text className="text-base font-bold underline ml-2 text-gray-200">{props.name}</Text>
      </View>
      <View className="w-full flex-row justify-center h-96 ">
        <View className=" w-4/5 ">
          <Image
            className="w-full h-full object-cover rounded-t-lg"
            source={props.photo}
            alt=""
          />
        </View>
        {/* <Text className="pseudo">TheCHélico</Text> */}
      </View>
      <View className="w-full items-center">
        <View className="flex-column w-4/5 items-center bg-white rounded-b-lg">
          <View className="flex-row w-full justify-between px-1.5 py-1">
            <View className="flex-row">
              <TouchableOpacity onPress={() => handleLiked()}>
                <FontAwesome name="heart" size={25} color={color}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="comment-o" size={25} className="pl-2.5"/>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <FontAwesome name="send" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View className="py-1.5">
            <Text>{props.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
