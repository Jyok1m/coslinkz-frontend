import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React from "react";

export default function SiScreen({ navigation }) {
  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.separator} />

      <View style={styles.top}>
        <Image style={styles.logo} source={require("../assets/Logo CosLinkz.webp")} />
        <Text style={styles.title}>CosLinkz</Text>
      </View>

      <View style={styles.containerInput}>
        <TextInput style={styles.input} placeholder="Pseudo"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry={true}
        ></TextInput>
        <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('TabNavigator')}>
          <Text style={styles.text}>CONNEXION</Text>
        </TouchableOpacity>
        <View style={styles.question}>
          <Text>
            Pas encore inscrit ?{" "}
            <Text style={styles.link} onPress={() => navigation.navigate('Su')}>
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
    backgroundColor: "#0861c4",
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
    backgroundColor: "#FCEFEC"
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
