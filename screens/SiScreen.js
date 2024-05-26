import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../reducers/user";


export default function SiScreen({ navigation }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [terror , setError] = useState("")

  const dispatch = useDispatch()


  const handleLogin = async () => {
   try {
    const response = await fetch("http://192.168.1.102:4000/auth/sign-in", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ identifier, password }),
    })
    const data = await response.json()
    // console.log(data);
    if (data.mustConfirm) {
      navigation.navigate("Confirm");
      dispatch(login({username: identifier, confirm: data.mustConfirm, access: data.accessToken, refresh:data.refreshToken}))
      // setUsernameSi("")
      // setPasswordSi("")
    } else if(data.error){
      return
    } else{
      // console.log(data)
      navigation.navigate("TabNavigator");
      dispatch(login({ username: identifier, confirm: data.mustConfirm, access: data.accessToken, refresh:data.refreshToken}))
    }
     }  
     catch (e) {
			setError('Network error');
		}
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <LinearGradient
        colors={["#0a1841", "#0b80db"]}
        style={styles.background}
      />

      <View style={styles.separator} />

      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require("../assets/Logo CosLinkz.webp")}
        />
        <Text style={styles.title} className="text-gray-300 font-semibold">
          CosLinkz
        </Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          placeholder="Pseudo"
          onChangeText={(value) => setIdentifier(value)}
          value={identifier}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          value={password}
        ></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text className="underline w-full items-end">
            Mot de passe oublié
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => handleLogin()}>
          <Text style={styles.text}>CONNEXION</Text>
        </TouchableOpacity>
        <View style={styles.question}>
          <Text>
            Pas encore inscrit ?{" "}
            <Text style={styles.link} onPress={() => navigation.navigate("Su")}>
              Inscription
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
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

  // mainContain: {
  //   marginTop: 20,
  // },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  separator: {
    height: 170,
    backgroundColor: "transparent",
  },

  //   background: {
  //     height: "100%",
  //     width: "100%",
  //     position: "absolute",
  //   },
  containerInput: {
    width: "80%",
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    paddingTop: 15,
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00000015",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FCEFEC",
  },
  buttons: {
    backgroundColor: "#74D48F",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    marginTop: 30,
    marginRight: 10,
  },
  text: {
    color: "white",
  },
  connectWith: {
    margin: 15,
  },
  question: {
    alignItems: "center",
    marginTop: 10,
    padding: 40,
    margin: 10,
  },
  link: {
    textDecorationLine: "underline",
    fontSize: 15,
  },
  social: {
    padding: 30,
  },
  top: {
    alignItems: "center",
    justifyContent: "center",
  },
});
