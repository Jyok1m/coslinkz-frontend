import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Profile from "../components/Profile";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";

export default function ProfileScreen({ navigation }) {
  const photos = [
    { photo: require("../assets/Cosplay_de_Zidane_Tribal.jpg") },
    { photo: require("../assets/Cosplayeur.jpg") },
    { photo: require("../assets/yogurt.jpg") },
    { photo: require("../assets/yogurt.jpg") },
    { photo: require("../assets/yogurt.jpg") },
    { photo: require("../assets/yogurt.jpg") },
    { photo: require("../assets/yogurt.jpg") },
    { photo: require("../assets/yogurt.jpg") },
    { photo: require("../assets/yogurt.jpg") },
    { photo: require("../assets/yogurt.jpg") },
    { photo: require("../assets/yogurt.jpg") },
  ];

  const profiles = photos.map((data, i) => {
    return <Profile key={i} photo={data.photo} />;
  });

  return (
    <SafeAreaView className="flex h-full">
      <LinearGradient
        colors={["#0a1841", "#0b80db"]}
        className=" w-full h-full absolute"
      />

      <View className="flex-row justify-between">
        <View className="flex-row ml-2">
          <TouchableOpacity>
            <Image
              className="p-16 mt-12 w-2 h-2 rounded-full"
              source={require("../assets/Rallo.jpg")}
            />
          </TouchableOpacity>
          <View className="flex-row mt-16 ml-2">
            <View className="flex-col ml-4 items-center">
              <Text className="font-bold text-gray-200">31</Text>
              <Text className="text-gray-200">Abonnés</Text>
            </View>
            <View className="flex-col ml-4 items-center">
              <Text className="font-bold text-gray-200">12</Text>
              <Text className="text-gray-200">Abonnements</Text>
            </View>
          </View>
        </View>
        <View className="mr-4 mt-12">
          <TouchableOpacity>
            <FontAwesome name="ellipsis-v" size={25} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-2 ml-4">
        <Text className="text-gray-200 font-bold">Farid</Text>
        <Text className="text-gray-200">Salut la comu, ici vous trouverez tous mes cosplays  </Text>
      </View>

      <ScrollView className="mt-8">
        <View className="mt-4 flex-row flex-wrap w-full justify-center">
          {profiles}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
