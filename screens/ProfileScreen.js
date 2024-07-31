import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Badge } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Profile from "../components/Profile";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState, useEffect } from "react";
import { localFetch } from "../localFetch";
import { useSelector, useDispatch } from "react-redux";

export default function ProfileScreen({ navigation }) {
  const user = useSelector((state) => state.user.value);

  const [numFollowers, setNumFollowers] = useState();
  const [numResquest, setNumRequest] = useState(null)

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

  useEffect(() => {
    fetch(`${localFetch}/user/friends?ref=received`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        refresh: user.refresh,
        access: user.access,
      },
    })
    .then(res => res.json())
    .then(data => {
      data.success && setNumRequest(data.friendList.length)
    })
  }, [])


  fetch(`${localFetch}/user/friends?ref=all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      refresh: user.refresh,
      access: user.access,
    },
  })
    .then((response) => response.json())
    .then((data) => setNumFollowers(data.friendList.length));

  const photos = [
    { photo: require("../assets/Cosplay_de_Zidane_Tribal.jpg") },
    { photo: require("../assets/Cosplayeur.jpg") },
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
      <View className="flex-row pt-6 justify-between items-center pl-4 pr-4">
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.logo}
            source={require("../assets/Logo CosLinkz.webp")}
          />
        </TouchableOpacity>
        <View className="flex-row">
          <TouchableOpacity
            className="mr-4"
            onPress={() => navigation.navigate("Friends")}
          >
            <FontAwesome className="text-white" name="users" size={30} />
           {numResquest > 0 && <Badge
              value={numResquest}
              status="error"
              containerStyle={{ position: "absolute", top: -4, right: -4 }}
            />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
            <FontAwesome className="text-white" name="gears" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row justify-between">
        <View className="flex-column border-b w-full items-center">
          <View>
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
          </View>
          <View className="mt-4 items-center">
            <Text className="text-gray-200 font-bold mb-1 w-full text-lg">
              {user.username}
            </Text>
            <Text className="text-gray-200 text-center">
              Salut la commu, ici vous trouverez tous mes cosplays.
            </Text>
          </View>
          <View className="flex-row mt-8 pb-4 w-full justify-around">
            <View className="flex-col items-center">
              <Text className="font-bold text-gray-200">31</Text>
              <Text className="text-gray-200">Follows</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="font-bold text-gray-200">{numFollowers}</Text>
              <Text className="text-gray-200">Followers</Text>
            </View>
            <View className="flex-col items-center">
              <Text className="font-bold text-gray-200">{photos.length}</Text>
              <Text className="text-gray-200">Posts</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView className="mt-8">
        {photos.length > 0 ? (
          <View className="mt-4 flex-row flex-wrap w-full justify-center">
            {photoProfile}
          </View>
        ) : (
          <View className="w-full items-center">
            <Text className="text-white font-bold text-3xl">Aucun Post</Text>
          </View>
        )}
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

  user: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginRight: "5%",
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
    marginTop: 20,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
    height: 110,
    width: 110,
  },

  image: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 70,
    marginTop: 50,
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
