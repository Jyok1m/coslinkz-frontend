import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { localFetch } from "../localFetch";
import { useSelector } from "react-redux";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, {useState, useEffect} from "react";
import Posts from "../components/Posts";

export default function HomeScreen({ navigation }) {

  

  const postData = [
    {
      name: "Farid",
      avatar: require("../assets/Kiyo Takamine.webp"),
      photo: require("../assets/Cosplayeur.jpg"),
      description: "Aujourd'hui je vous présente mon premier cosplay"
    },
    {
      name: "CosMos",
      avatar: require("../assets/Rallo.jpg"),
      photo: require("../assets/Cosplay_de_Zidane_Tribal.jpg"),
      description: "Le King Monkey"
    },
  ];

  const posts = postData.map((data, i) => {
    return (
      <Posts key={i} name={data.name} avatar={data.avatar} photo={data.photo} description={data.description}/>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#0a1841", "#0b80db"]} style={styles.background} />

      <View >
        <View style={styles.header}>
          <View>
            <Image
              style={styles.logo}
              source={require("../assets/Logo CosLinkz.webp")}
            />
          </View>
          <View style={styles.navIcon}>
            <TouchableOpacity>
              <FontAwesome name="search" size={25} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="bell-o" size={25} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('AllChats')}>
              <FontAwesome name="envelope-o" size={25} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView className="mt-2">
          <View className="mb-32">{posts}</View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  header: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 25,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  navIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
    color: "#fff",
  },
});
