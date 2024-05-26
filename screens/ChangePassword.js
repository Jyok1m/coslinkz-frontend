import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function ForgetScreen() {
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [validatePassword, setValidatePassword] = useState(false)
  const user = useSelector((state) => state.user.value);

  const handleChange = () => {
    fetch("http://192.168.20.46:4000/auth/change-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        refresh: user.refresh,
        access: user.access,
      },
      body: JSON.stringify({ password: newPassword }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigation.navigate("TabNavigator");
        }
      });
  };

  return (
    <SafeAreaView className="flex h-full">
      <LinearGradient
        colors={["#0a1841", "#0b80db"]}
        className="h-full w-full absolute"
      />
      <View className=" justify-center items-center h-full">
        <View className="justify-center items-center bg-gray-200 p-4 rounded-2xl">
          <View>
            <Text className="mb-4">
              Veuillez entrer un nouveau mot de passe
            </Text>
          </View>
          <View className="mt-2">
            <TextInput
              onChangeText={(value) => setNewPassword(value)}
              value={newPassword}
              placeholder="Nouveau mot de passe"
            ></TextInput>
            <TextInput
              onChangeText={(value) => setConfirmPassword(value)}
              value={confirmPassword}
              placeholder="Confirmez mot de passe"
            ></TextInput>
          </View>
          <View className="mt-6">
            <TouchableOpacity className="p-2 bg-green-200">
              <Text>Validez</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
