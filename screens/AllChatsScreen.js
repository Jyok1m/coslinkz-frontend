import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import Chats from "../components/Chats";

export default function AllChatsScreen({ navigation: { goBack } }) {
  const msg = [
    {
      name: "Fill",
      avatar: require("../assets/Kiyo Takamine.webp"),
      message: "Salut, ce que tu fait est impressionnant.",
    },
    {
      name: "Patrick",
      avatar: require("../assets/Rallo.jpg"),
      message: "Je vais à la prochaine convention",
    },
    {
      name: "Lise",
      avatar: require("../assets/Rallo.jpg"),
      message:
        "Je vais faire le meilleur cosplay de tous les temps tu vas voir",
    },
    {
      name: "Paul",
      avatar: require("../assets/Kiyo Takamine.webp"),
      message: "Hey",
    },
    {
      name: "John",
      avatar: require("../assets/Rallo.jpg"),
      message: "A demain",
    },
    {
      name: "Bob",
      avatar: require("../assets/Kiyo Takamine.webp"),
      message: "J'arrive dans 3 minutes",
    },
  ];

  const myChats = msg.map((data, i) => {
    return (
      <Chats
        key={i}
        name={data.name}
        avatar={data.avatar}
        message={data.message}
      />
    );
  });

  return (
    <SafeAreaView className="h-full">
      <LinearGradient
        colors={["#0a1841", "#0b80db"]}
        className="w-full h-full absolute"
      />
      <View className=" h-1/4 mt-6 flex-column justify-between  border border-white m-8 rounded-xl p-2">
        <View>
          <TouchableOpacity onPress={() => goBack()}>

          <FontAwesome
            className="text-white"
            name="arrow-left"
            size={30}
            />
            </TouchableOpacity>
        </View>
        <View className="w-full items-center">
          <Text className="text-white font-semibold text-2xl mb-2">
            Your Chats
          </Text>
          <TextInput
            placeholder="Search"
            className="bg-slate-300 h-12 w-4/5 rounded-2xl p-2"
          ></TextInput>
        </View>
        <View></View>
      </View>

      <ScrollView>{myChats}</ScrollView>
    </SafeAreaView>
  );
}
