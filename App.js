import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    "GolosText-Black": require("./assets/fonts/GolosText-Black.ttf"),
    "GolosText-Regular": require("./assets/fonts/GolosText-Regular.ttf"),
    "GolosText-ExtraBold": require("./assets/fonts/GolosText-ExtraBold.ttf"),
    "GolosText-Medium": require("./assets/fonts/GolosText-Medium.ttf"),
    "GolosText-SemiBold": require("./assets/fonts/GolosText-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
