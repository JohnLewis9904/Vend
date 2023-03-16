import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';

import colors from '../styles/colors';

const image = require('../assets/fremdMerchMainBg.png');

function SplashScreen({navigation}) {
  return (
      <ImageBackground source={image} resizeMode='stretch' style={styles.logo}>
        <View style={styles.imageholder}>
          <Image source={require('../assets/vendLogo-removebg-preview.png')} />
        </View>
        <View style={styles.buttonHolder}>
          <Pressable 
            style={styles.logInButton}
            onPress={() => navigation.navigate("")}
          >
            <Text style={styles.myText}>Log In</Text>
          </Pressable>
          <Pressable 
            style={styles.signUpButton}
            onPress={() => navigation.navigate("SignInScreen")}
          >
            <Text style={styles.myTextTwo}>Sign Up</Text>
          </Pressable>
          
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  logInButton: {
    width: 130,
    height: 35,
    backgroundColor: colors.main,
    marginBottom: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButton: {
    width: 130,
    height: 35,
    backgroundColor: colors.lightGrey,
    marginBottom: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  buttonHolder: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
  },
  myText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 12,
  },
  myTextTwo: {
    color: colors.main,
    fontWeight: '500',
    fontSize: 12,
  },
  imageholder: {
    alignItems: 'center'
  }
});
export default SplashScreen;