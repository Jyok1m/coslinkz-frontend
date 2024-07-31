import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/user"
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";

export default function SettingScreen({ navigation: { goBack }, navigation }) {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigation.navigate("Si")
  }

  return (
    <SafeAreaView className="h-full">
      <LinearGradient
        colors={["#0a1841", "#0b80db"]}
        className="w-full h-full absolute"
      />
      <View className="">
          <View className="flex-row justify-between p-6 items-center">
            <View className="pt-4">
              <TouchableOpacity>
                <FontAwesome
                  className="text-white"
                  name="arrow-left"
                  size={30}
                  onPress={() => goBack()}
                />
              </TouchableOpacity>
            </View>
            <View className="pt-4">
              <Text className="text-3xl font-semibold text-gray-400">
                SETTINGS
              </Text>
            </View>
            <View className="pt-4">
              <TouchableOpacity>
                <FontAwesome
                  className="text-white"
                  name="power-off"
                  size={30}
                  onPress={() => handleLogout()}
                />
              </TouchableOpacity>
            </View>
        </View>
        <View className="ml-4 mt-2">
          <TouchableOpacity className="border-b-2 w-4/5 pb-1 mt-4">
            <Text className="text-white text-2xl">Modifiez le profil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="border-b-2 w-4/5 pb-1 mt-4"
            onPress={() => navigation.navigate("ChangePassword")}
          >
            <Text className="text-white text-2xl">
              Modifiez le mot de passe
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="border-b-2 w-4/5 pb-1 mt-4">
            <Text className="text-white text-2xl">Supprimer mon compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
