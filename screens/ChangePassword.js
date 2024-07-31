import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { localFetch } from "../localFetch";
import { useSelector } from "react-redux";

export default function ForgetScreen({navigation}) {
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [validatePassword, setValidatePassword] = useState(false)
  const user = useSelector((state) => state.user.value);

  const handleChange = () => {
    if(newPassword === confirmPassword){
    fetch(`${localFetch}/auth/change-password`, {
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
          alert(`Mot de passe modifié avec succée ✅`)
        } else {
          alert(`Le mot de passe ne doit pas être identique à l'ancien`)
        }
      })} else {
        alert('Vérifiez le mot de passe')
      }
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
          <View className="mt-2 w-4/5">
            <TextInput
              onChangeText={(value) => setNewPassword(value)}
              secureTextEntry={true}
              value={newPassword}
              placeholder="Nouveau mot de passe"
              className="border h-12 mb-4 p-2 rounded-lg"
            />
            <TextInput
              onChangeText={(value) => setConfirmPassword(value)}
              secureTextEntry={true}
              value={confirmPassword}
              placeholder="Confirmez mot de passe"
              className="border h-12 mb-4 p-2 rounded-lg"
            />
          </View>
          <View className="mt-6">
            <TouchableOpacity className="p-2 bg-green-200 rounded-lg" onPress={() => handleChange()}>
              <Text>Validez</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
