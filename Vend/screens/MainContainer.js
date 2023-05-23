import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import ShopScreen from './Shop';
import ItemUploadScreen from './ItemUploadScreen';

const homeName = 'Home';
const shopName = 'Shop';
const uploadName = 'Upload';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn == homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn == shopName) {
              iconName = focused ? 'pricetags' : 'pricetags-outline';
            } else if (rn == uploadName) {
              iconName = focused ? 'cloud-upload' : 'cloud-upload-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'dimgray',
          labelStyle: { paddingBottom: 0, fontSize: 15, fontWeight: 'bold' },
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={shopName} component={ShopScreen} />
        <Tab.Screen name={uploadName} component={ItemUploadScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default MainContainer;
