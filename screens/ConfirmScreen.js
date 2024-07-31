import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { localFetch } from "../localFetch";
import { useSelector } from "react-redux";

export default function ConfirmScreen({navigation}) {
  const [code, setCode] = useState("");
  const user = useSelector((state) => state.user.value);
  console.log(user);
  

  const handleConfirm = () => {
    fetch(`${localFetch}/auth/confirm-account`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "refresh": user.refresh,
            "access": user.access,
        },
        body: JSON.stringify({code: code})
    })
    .then(response => response.json())
    .then(data => {
      if(data.success){
        navigation.navigate("TabNavigator")
      }
    })
  };

  return (
    <SafeAreaView className="h-full flex">
      <LinearGradient
        colors={["#0a1841", "#0b80db"]}
        className=" w-full h-full absolute"
      />
      <View className="justify-center items-center h-full">
        <View className="mb-8 justify-center">
          <Text className="text-gray-300 font-bold">
            Veuillez entrer votre code de confirmation envoyé dans votre mail
          </Text>
        </View>
        <View className="bg-gray-400 p-2 w-4/5 ">
          <TextInput
            className="underline justify-center"
            placeholder="Entrez votre code"
            onChangeText={(value) => setCode(value)}
            value={code}
          ></TextInput>
        </View>
        <TouchableOpacity className="rounded-full bg-green-400 p-4 mt-8" onPress={() => handleConfirm()}>
          <Text className="font-bold ">CONFIRMEZ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
