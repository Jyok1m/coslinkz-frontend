import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

export default function Tuto(props) {
  return (
    <TouchableOpacity>
      <View className="h-32 mb-8 mx-2 flex justify-center items-center border border-solid border-red-200 bg-gray-300 rounded">
        <Text className="justify-center text-xl font-bold">
          {props.categorie.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
