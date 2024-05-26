import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SiScreen from "./screens/SiScreen";
import SuScreen from "./screens/SuScreen";
import HomeScreen from "./screens/HomeScreen";
import EventScreen from "./screens/EventScreen";
import TutoScreen from "./screens/TutoScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AvatarSnapScreen from "./screens/AvatarSnapScreen";
import ConfirmScreen from "./screens/ConfirmScreen";
import ChangePasswordScreen from "./screens/ChangePassword"
import ForgotPassword from "./screens/ForgotPassword";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from './reducers/user';

const store = configureStore({
  reducer: { user },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Event") {
            iconName = "calendar"
          } else if (route.name === "Tuto") {
            iconName = "book"
          } else if (route.name === "Profile") {
            iconName = "user";
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#2196f3",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Event" component={EventScreen} />
      <Tab.Screen name="Tuto" component={TutoScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Si" component={SiScreen} options={{headerShown: false}} />
        <Stack.Screen name="Su" component={SuScreen} options={{headerShown: false}} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} options={{headerShown: false}} />
        <Stack.Screen name="Avatar" component={AvatarSnapScreen} options={{headerShown: false}} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} options={{headerShown: false}} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
