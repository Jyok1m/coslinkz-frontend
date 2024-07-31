import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Badge from "react-native-elements"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { localFetch } from "../localFetch";
import { LinearGradient } from "expo-linear-gradient";
import Friends from "../components/Friends";

export default function FriendsScreen() {
  const user = useSelector((state) => state.user.value);
  const [friendsList, setFriendsList] = useState([]);

  useEffect(() => {
    fetch(`${localFetch}/user/friends?ref=received`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        refresh: user.refresh,
        access: user.access,
      },
    })
      .then((response) => response.json())
      .then((data) => setFriendsList(data.friendList));
  }, []);

  const friends = friendsList.map((friend, i) => (
    <Friends key={i} {...friend} />
  ));

  return (
    <SafeAreaView className="h-full">
      <LinearGradient
        colors={["#0a1841", "#0b80db"]}
        className="w-full h-full absolute"
      />
      <View className="">
        <View className="p-6">
          <View className="flex-row justify-between">
            <View className="items-center w-full">
              <Text className="text-3xl font-semibold text-gray-400 pt-4">
                Friends
              </Text>
            </View>
          </View>
          {friendsList.length > 0 ? <View>{friends}</View> : <View className="justify-center items-center h-5/6"><Text className= "text-white font-semibold text-xl">Aucune demande d'ami</Text></View>}
        </View>
      </View>
    </SafeAreaView>
  );
}
