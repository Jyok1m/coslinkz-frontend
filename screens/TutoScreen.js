import { View, Text, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Tuto from "../components/Tuto";
import React from "react";

export default function TutoScreen() {

  const tutoCat = [{categorie: "Tenues"}, {categorie: "Maquillages"}, {categorie: "Personnages"}]

  const tuto = tutoCat.map((data, i ) => {
    return <Tuto key={i} categorie={data.categorie}/>
  })

  return (
    <SafeAreaView className="flex h-full">
        <LinearGradient colors={["#0a1841", "#0b80db"]} className=" w-full h-full absolute" />
      <View>
        <View className="p-6">
          <View className="w-full flex-row justify-center">
            <Text className="text-3xl font-semibold text-gray-100 pt-4">TUTORIEL</Text>
          </View>
          <View className="pt-24">
            {tuto}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
