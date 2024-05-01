import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SiScreen from "./screens/SiScreen";
import SuScreen from "./screens/SuScreen";
import HomeScreen from "./screens/HomeScreen";
import EventScreen from "./screens/EventScreen";
import TutoScreen from "./screens/TutoScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ProfileScreen from "./screens/ProfileScreen";

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
          }
          else if (route.name === "Profile") {
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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Si" component={SiScreen} options={{headerShown: false}} />
        <Stack.Screen name="Su" component={SuScreen} options={{headerShown: false}} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
