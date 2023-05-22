import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import './firebase';
// from the app.json, got commented out =>  // "firebase": "^9.21.0",
import HomeScreen from "./screens/HomeScreen";
import SplashScreen from "./screens/SplashScreen";
import SignInScreen from "./screens/SignInScreen";
import ShopScreen from "./screens/Shop";
import ProfileScreen from "./screens/ProfileScreen.js";
import RegisterScren from "./screens/RegisterScreen";
import ImageScreen from "./screens/ItemUploadScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignInScreen"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterScreen"
          component={RegisterScren}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ShopScreen"
          component={ShopScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ImageScreen"
          component={ImageScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
