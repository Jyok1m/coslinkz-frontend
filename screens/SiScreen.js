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
import React, { useState } from "react";

export default function SiScreen({ navigation }) {
  const [usernameSi, setUsernameSi] = useState("");
  const [passwordSi, setPasswordSi] = useState("");

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
          onChangeText={(value) => setUsernameSi(value)}
          value={usernameSi}
        ></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
          onChangeText={(value) => setPasswordSi(value)}
          value={passwordSi}
        ></TextInput>
        <Text className="underline w-full items-end">Mot de passe oublié</Text>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => navigation.navigate("TabNavigator")}
        >
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
