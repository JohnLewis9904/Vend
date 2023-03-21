import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import fake from './screens/fake';

const Stack = createNativeStackNavigator();

export default function App() {
 return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="SplashScreen" component={SplashScreen}
        />
        <Stack.Screen options={{ headerShown: false}} name="SignInScreen" component={SignInScreen}
        />
        <Stack.Screen options={{ headerShown: false}} name="fake" component={fake}
        />
      </Stack.Navigator>
    </NavigationContainer>
 );
}

