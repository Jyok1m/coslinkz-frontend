import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Evenement from "../components/Evenement";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function EventScreen() {
  const eventsData = [
    {
      date: "25/04/2023",
      title: "Japan Expo",
      description:
        "elit. Porro aspernatur aperiam vel corporis dicta asperiores nam, mollitia natus doloribus? Harum quisquam quidem enim sunt. Deleniti suscipit laborum est eaque quos!",
    },
    {
      date: "10/10/2024",
      title: "Titre Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quae non nesciunt, quos ratione voluptatem aliquid eius, iure commodi modi veniam neque",
    },
    {
      date: "15/12/2024",
      title: "Titre Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quae non nesciunt, quos ratione voluptatem aliquid eius, iure commodi modi vneque",
    },
    {
      date: "15/12/2024",
      title: "Titre Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quae non nesciunt, quos ratione voluptatem aliquid eius, iure commodi modi vneque",
    },
    {
      date: "15/12/2024",
      title: "Titre Event",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum quae non nesciunt, quos ratione voluptatem aliquid eius, iure commodi modi vneque",
    },
  ];

  const events = eventsData.map((data, i) => {
    return (
      <Evenement
        key={i}
        date={data.date}
        title={data.title}
        description={data.description}
      />
    );
  });

  return (
    <SafeAreaView className=" flex h-full">
        <LinearGradient colors={["#0a1841", "#0b80db"]} style={styles.background} />

      <View className="">
        <View className="p-6">
          <View className="flex-row justify-center">
            <Text className="text-3xl font-semibold text-gray-400 pt-4">
              EVENT
            </Text>
          </View>
        </View>
        <ScrollView>
          <View className="h-full mb-32">{events}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
})