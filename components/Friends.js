import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { localFetch } from "../localFetch";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Friends(props) {

    const requestId = props.requestId
    const user = useSelector((state) => state.user.value)

    const handleAccept = () => {
        fetch(`${localFetch}/user/friendship?ref=accept&requestId=${requestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                refresh: user.refresh,
                access: user.access,
              }
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                alert(`${props.username} est devenu(e) votre ami(e)`)
            }
        })
    }

    const handleReject = () => {
        fetch(`${localFetch}/user/friendship?ref=reject&requestId=${requestId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                refresh: user.refresh,
                access: user.access,
              }
        })
        .then(res => res.json())
        .then(data => {
            if(data.success){
                alert(`${props.username} ne sera pas votre ami`)
            }
        })
    }

  return (
    <View className="rounded-2xl bg-cyan-50 p-4 flex-row items-center w-full justify-between my-2">
      <View className="flex-row items-center">
        <View>
          <Image
            source={
              props.avatar
                ? props.avatar
                : require("../assets/avatar_default.jpg")
            }
            className="w-12 h-12 rounded-full"
          />
        </View>
        <View className="ml-2">
          <Text className="text-xl text-zinc-400 font-semibold">
            {props.username}
          </Text>
        </View>
        <View className="ml-1">
          <FontAwesome
            className={props.isOnline ? "text-green-400" : "text-red-500"}
            name="circle"
            size={15}
          />
        </View>
      </View>
      {props.friendshipStatus === "pending" && (
        <View className="flex-row">
          <TouchableOpacity className="mr-2" onPress={() => handleAccept()}>
            <FontAwesome className="text-green-400" name="check" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleReject()}>
            <FontAwesome className="text-red-500" name="remove" size={30} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
