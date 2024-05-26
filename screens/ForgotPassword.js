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
import { useSelector } from "react-redux";

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState();
  const [isSend, setIsSend] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false)

  const handleForgot = () => {
    fetch("http://192.168.1.102:4000/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setIsSend(true);
          setEmailNotFound(false);
          setEmail("");
        } else{
          setIsSend(false);
          setEmailNotFound(true);
        }
      });
  };

  return (
    <SafeAreaView className="h-full flex">
      <LinearGradient
        colors={["#0a1841", "#0b80db"]}
        className=" w-full h-full absolute"
      />
      <View className="justify-center items-center h-full">
        {isSend && (
          <View className="bg-green-400 p-2 text-gray-300 mb-4">
            <Text>Un mot de passe à été envoyé à votre adresse mail.</Text>
          </View>
        )}
        
        {emailNotFound && (
          <View className="bg-red-400 p-2 text-gray-300 mb-4">
            <Text>Email non valide.</Text>
          </View>
        )}
        <View className="mb-8">
          <Text className="text-gray-300 font-bold">
            Veuillez entrer votre adresse mail
          </Text>
        </View>
        <View className="bg-gray-300 p-2 w-4/5 ">
          <TextInput
            className="underline"
            placeholder="Entrez votre adresse mail"
            onChangeText={(value) => setEmail(value)}
            value={email}
          ></TextInput>
        </View>
        <TouchableOpacity
          className="rounded-full bg-green-400 p-4 mt-8"
          onPress={() => handleForgot()}
        >
          <Text className="font-bold">CONFIRMEZ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
