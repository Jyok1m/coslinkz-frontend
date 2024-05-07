import { View, Text, Image, SafeAreaView, Dimensions } from "react-native";
import React from "react";

export default function Evenement(props) {
  return (
    <View className="h-32 mb-8 mx-2">
      <View className="flex-row bg-gray-200 rounded-lg ">
        <View className="justify-center h-full p-1 ml-1">
          <Text className="font-semibold rounded-full bg-green-500 p-1">{props.date}</Text>
        </View>
        <View className="w-3/4 pl-2 py-1">
          <View>
            <Text className="font-bold">{props.title}</Text>
          </View>
          <View >
            <Text>{props.description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
