// import React, { useState, useEffect, useRef } from "react";
// import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
// import { Camera, CameraType, FlashMode } from "expo-camera/legacy";
// import { useDispatch, useSelector } from "react-redux";
// import { addProfilePic } from "../reducers/user";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
// import { useIsFocused } from "@react-navigation/native";
// import { localFetch } from "../localFetch";

// export default function AvatarSnapScreen({ navigation }) {
//   const dispatch = useDispatch();
//   const isFocused = useIsFocused();
//   const user = useSelector((state) => state.user.value);

//   const [hasPermission, setHasPermission] = useState(false);
//   const [type, setType] = useState(CameraType.back);
//   const [flashMode, setFlashMode] = useState(FlashMode.off);
//   const [capturedPhoto, setCapturedPhoto] = useState(null);

//   let cameraRef = useRef(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   const takePicture = async () => {
//     const photo = await cameraRef.takePictureAsync({ quality: 0.3 });
//     setCapturedPhoto(photo);
//   };

//   const handleValid = () => {
//     setCapturedPhoto(null);

//     if (capturedPhoto?.uri) {
//       const formData = new FormData();
//       formData.append("photoFromFront", {
//         uri: capturedPhoto.uri,
//         name: "photo.jpg",
//         type: "image/jpeg",
//       });

//       fetch(`http://192.168.20.46:3000/user/avatar`, {
//         method: "POST",
//         body: formData,
//         headers: {
//           "Content-Type": "application/json",
//           refresh: user.refresh,
//           access: user.access,
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           if (data.result) {
//             // console.log(data);
//             dispatch(addProfilePic(data.url))

//             // fetch(`${localFetch}/users/avatar/${user.token}`, {
//             //   method: 'PUT',
//             //   headers: { 'Content-Type': 'application/json' },
//             //   body: JSON.stringify({ avatar: data.url })
//             // })
//           }
//         });
//     }
//   };

//   if (!hasPermission || !isFocused) {
//     return <View />;
//   }
//   return (
//     <Camera
//       type={type}
//       flashMode={flashMode}
//       ref={(ref) => (cameraRef = ref)}
//       style={styles.camera}
//     >
//       {capturedPhoto ? (
//         <View style={styles.previewContainer}>
//           <Image
//             source={{ uri: capturedPhoto.uri }}
//             style={styles.previewImage}
//           />
//           <FontAwesome
//             onPress={() => setCapturedPhoto(null)}
//             name="times"
//             style={styles.deleteIcon}
//           />
//           <FontAwesome
//             onPress={() => {
//               handleValid();
//               navigation.navigate("TabNavigator", { screen: "Profil" });
//             }}
//             name="send"
//             style={styles.sendIcon}
//           />
//         </View>
//       ) : (
//         <View>
//           <View style={styles.buttonsContainer}>
//             <FontAwesome
//               name="rotate-right"
//               size={30}
//               color="#ffffff"
//               onPress={() =>
//                 setType(
//                   type === CameraType.back ? CameraType.front : CameraType.back
//                 )
//               }
//               style={styles.button}
//             />
//             <FontAwesome
//               name="flash"
//               size={30}
//               color={flashMode === FlashMode.off ? "#ffffff" : "#e8be4b"}
//               onPress={() =>
//                 setFlashMode(
//                   flashMode === FlashMode.off ? FlashMode.torch : FlashMode.off
//                 )
//               }
//               style={styles.button}
//             />
//             <FontAwesome
//               name="remove"
//               size={40}
//               color="#ffffff"
//               onPress={() =>
//                 navigation.navigate("TabNavigator", { screen: "Profil" })
//               }
//               style={styles.button}
//             />
//           </View>

//           <View style={styles.snapContainer}>
//             <TouchableOpacity onPress={() => cameraRef && takePicture()}>
//               <FontAwesome name="circle-thin" size={95} color="#ffffff" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//     </Camera>
//   );
// }


import React, { useState, useRef, useEffect } from 'react';
import { View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Camera, CameraType, FlashMode } from 'expo-camera/legacy';
import { FontAwesome } from '@expo/vector-icons';
import { addProfilePic } from '../reducers/user'; // Assurez-vous que cette action est correctement importée


export default function AvatarSnapScreen({ navigation }){
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [flashMode, setFlashMode] = useState(FlashMode.off);
    const [hasPermission, setHasPermission] = useState(null);
    const [isFocused, setIsFocused] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.value)
    const cameraRef = useRef(null);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setCapturedPhoto(photo);
        }
    };

    const handleValid = () => {
        if (capturedPhoto?.uri) {
            const formData = new FormData();
            formData.append("avatar", {
                uri: capturedPhoto.uri,
                name: "avatar.jpg",
                type: "image/jpeg",
            });

            fetch(`${localFetch}/user/avatar`, {
                method: "POST",
                body: formData,
                headers: {
                    'refresh': user.refresh,
                    'access': user.access,
                },
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                // if (data.success) {
                //     dispatch(addProfilePic(data.uri));
                //     navigation.navigate("TabNavigator", { screen: "Profil" });
                // } else {
                //     console.log(data);
                //     console.error("Error:", data.error);
                // }
            })
            .catch((error) => {
                console.error("Network request failed:", error);
            });
        } else {
            Alert.alert("No photo captured", "Please capture a photo first.");
        }
    };

    if (!hasPermission) {
        return <View />;
    }

    return (
        <Camera
            type={type}
            flashMode={flashMode}
            ref={cameraRef}
            style={styles.camera}
        >
            {capturedPhoto ? (
                <View style={styles.previewContainer}>
                    <Image
                        source={{ uri: capturedPhoto.uri }}
                        style={styles.previewImage}
                    />
                    <FontAwesome
                        onPress={() => setCapturedPhoto(null)}
                        name="times"
                        style={styles.deleteIcon}
                    />
                    <FontAwesome
                        onPress={() => {
                            handleValid();
                            navigation.navigate("TabNavigator", { screen: "Profil" });
                        }}
                        name="send"
                        style={styles.sendIcon}
                    />
                </View>
            ) : (
                <View>
                    <View style={styles.buttonsContainer}>
                        <FontAwesome
                            name="rotate-right"
                            size={30}
                            color="#ffffff"
                            onPress={() =>
                                setType(
                                    type === CameraType.back ? CameraType.front : CameraType.back
                                )
                            }
                            style={styles.button}
                        />
                        <FontAwesome
                            name="flash"
                            size={30}
                            color={flashMode === FlashMode.off ? "#ffffff" : "#e8be4b"}
                            onPress={() =>
                                setFlashMode(
                                    flashMode === FlashMode.off ? FlashMode.torch : FlashMode.off
                                )
                            }
                            style={styles.button}
                        />
                        <FontAwesome
                            name="remove"
                            size={40}
                            color="#ffffff"
                            onPress={() =>
                                navigation.navigate("TabNavigator", { screen: "Profil" })
                            }
                            style={styles.button}
                        />
                    </View>

                    <View style={styles.snapContainer}>
                        <TouchableOpacity onPress={takePicture}>
                            <FontAwesome name="circle-thin" size={95} color="#ffffff" />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </Camera>
    );
};






const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonsContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  button: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  snapContainer: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    paddingBottom: 25,
    paddingTop: 550,
  },
  previewContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  previewImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    position: "absolute",
    fontSize: 30,
    color: "white",
    top: 60,
    left: 20,
  },
  sendIcon: {
    position: "absolute",
    fontSize: 30,
    color: "white",
    top: 60,
    right: 20,
  },
});
