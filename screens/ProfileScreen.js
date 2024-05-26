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
import { useSelector } from "react-redux";

export default function ProfileScreen({ navigation }) {
  const user = useSelector((state) => state.user.value);
  // const handleAvatar = () =>{
  //   fetch('http://192.168.20.46:3000/user/avatar', {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "refresh": user.refresh,
  //       "access": user.access,
  //     },
  //     body: JSON
  //   })
  // }

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

  const photoProfile = photos.map((data, i) => {
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
          {!user.avatar ? (
            <TouchableOpacity
              style={styles.addPhoto}
              onPress={() => navigation.navigate("Avatar")}
            >
              <Text>+</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.deleteContainer}>
              <Image style={styles.image} source={{ uri: user.avatar }} />
              <TouchableOpacity onPress={() => handleRemove()}>
                <FontAwesome
                  name="times-circle-o"
                  size={20}
                  color="black"
                  style={styles.deleteicon}
                />
              </TouchableOpacity>
            </View>
          )}
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
        <View className="mr-6 mt-12">
          <TouchableOpacity onPress={console.log(user)}>
            <FontAwesome name="ellipsis-v" size={30} color={"red"} />
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-2 ml-4">
        <Text className="text-gray-200 font-bold mb-1">Farid</Text>
        <Text className="text-gray-200">
          Salut la comu, ici vous trouverez tous mes cosplays
        </Text>
      </View>

      <ScrollView className="mt-8">
        <View className="mt-4 flex-row flex-wrap w-full justify-center">
          {photoProfile}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "white",
  },

  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  header: {
    borderBottomWidth: 1,
    padding: 10,
    alignItems: "center",
  },

  headerText: {
    fontSize: 20,
    fontWeight: "800",
    paddingRight: 5,
    paddingTop: 20,
  },
  user: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginRight: "5%",
  },
  infos: {
    marginTop: "15%",
  },

  photos: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 30,
    height: 110,
    width: 110,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
  },
  addPhoto: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    height: 110,
    width: 110,
  },

  top: {
    marginBottom: 40,
    marginTop: 60,
    borderTopWidth: 1,
    padding: 10,
  },

  text1: {
    padding: 10,
  },

  objects: {
    paddingTop: 20,
    paddingBottom: 30,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
  },
  objectsContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  text2: {
    marginBottom: 200,
    borderTopWidth: 1,
    borderColor: "black",
    padding: 20,
  },

  image: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 70,
    marginTop: 50,
  },

  dons: {
    borderRadius: 50,
    padding: 10,
    marginLeft: 150,
    marginRight: 150,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#A896CF",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
  },

  textButton: {
    color: "white",
    fontSize: 13,
  },

  logout: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "#A896CF",
    height: 30,
    width: 130,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
  },
  delete: {
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    backgroundColor: "palevioletred",
    height: 30,
    width: 195,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
  },
  textlogout: {
    color: "white",
    fontSize: 12,
  },
  textDelete: {
    color: "white",
    fontSize: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: 300,
    height: 150,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  photocontainer: {
    justifyContent: "flex-end",
  },
  yes: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#74D48F",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    alignItems: "center",
    margin: 10,
  },
  not: {
    width: 100,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#A896CF",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    alignItems: "center",
    margin: 10,
  },
  ouiounon: {
    flexDirection: "row",
    justifyContent: "space-beetween",
  },
});
