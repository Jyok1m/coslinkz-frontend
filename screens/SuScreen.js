import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useDispatch, useSelector } from "react-redux";
import { localFetch } from "../localFetch";
import { login, logout } from "../reducers/user";

export default function SuScreen({ navigation }) {
  const [usernameSu, setUsernameSu] = useState("");
  const [email, setEmail] = useState("");
  const [passwordSu, setPasswordSu] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  
  const handleRegister = () => {
    fetch(`${localFetch}/auth/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameSu,
        email: email,
        password: passwordSu,
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      if (data.success) {
        navigation.navigate("Confirm");
        dispatch(login({ username: usernameSu, confirm: data.mustConfirm, access: data.accessToken, refresh:data.refreshToken}))
        console.log(user);
      }
    });
  };

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View className="h-screen justify-center items-center">
        <LinearGradient
          colors={["#0a1841", "#0b80db"]}
          style={styles.background}
        />

        <View style={styles.separator} />
        <View style={styles.iconBack}>
          <TouchableOpacity>
            <FontAwesome
              name="angle-left"
              onPress={() => navigation.navigate("Si")}
              size={40}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-column pt-32">
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
              onChangeText={(value) => setUsernameSu(value)}
              value={usernameSu}
            ></TextInput>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(value) => setEmail(value)}
              value={email}
            ></TextInput>
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              placeholder="Mot de passe"
              onChangeText={(value) => setPasswordSu(value)}
              value={passwordSu}
            ></TextInput>
            <View name="AgreedContainer" style={styles.agreedContainer}>
              <View name="CheckBtn" style={styles.check}>
                <View name="TextAgreedBtn" style={styles.textAgreedBtn}>
                  <Text style={styles.textValid}> J'accepte les </Text>
                  {/* // Redirige vers la page CGU */}
                  <Text style={styles.link}>
                    conditions générales d'utilisation
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => handleRegister()}
            >
              <Text style={styles.text}>INSCRIPTION</Text>
            </TouchableOpacity>
          </View>
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
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  //   separator: {
  //     height: 100,
  //     backgroundColor: "transparent",
  //   },
  iconBack: {
    width: "100%",
    alignItems: "flex-start",
    // flexDirection: "row",
    margin: 0,
    padding: 20,
    position: "absolute",
    paddingBottom: 670,
  },

  containerInput: {
    width: "80%",
    height: "80%",
    paddingTop: 20,
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#00000015",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#FCEFEC",
  },

  textValid: {
    color: "black",
    marginTop: 15,
    fontSize: 13,
  },

  link: {
    textDecorationLine: "underline",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 13,
  },

  buttons: {
    backgroundColor: "#74D48F",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    marginTop: 10,
  },

  text: {
    color: "white",
  },

  agreedContainer: {
    marginTop: 20,
    marginBottom: 20,
  },

  textAgreedBtn: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  top: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },

  title: {
    fontSize: 20,
    paddingTop: 15,
  },
  logo: {
    width: 100,
    height: 80,
  },
});
