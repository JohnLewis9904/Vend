import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';npm 
import fake from './screens/fake';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

export default function App() {
 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="SplashScreen" component={SplashScreen}
        />
        <Stack.Screen options={{ headerShown: false}} name="SignInScreen" component={SignInScreen}
        />
        <Stack.Screen options={{ headerShown: false}} name="HomeScreen" component={HomeScreen}
        />
      </Stack.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="ShopScreen" component={ShopScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
 );
}

