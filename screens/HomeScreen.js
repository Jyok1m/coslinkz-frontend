import { View, Text, Button, SafeAreaView, StyleSheet, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/* <Text>Home Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate("Profile")}
        /> */}
        <View>
            <View>
                <Image style={styles.logo} source={require("../assets/Logo CosLinkz.webp")}/>
            </View>
            <View style={styles.navIcon} >
                <FontAwesome name="search" size={20}/>
                <FontAwesome name="envelope-o" size={20}/>
                <FontAwesome name="bell-o"  size={20}/>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'skyblue'
    },
    logo: {
        width: 50,
        height: 50,
    },
    navIcon: {
        
    }
})