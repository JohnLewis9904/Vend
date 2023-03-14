import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';
import Constants from 'expo-constants';

import colors from '../../styles/colors';

const image = require('../../assets/fremdMerchMainBg.png');

export default function Splash() {
  return (
      <ImageBackground source={image} resizeMode='contain' style={styles.logo}>
        <View style={styles.buttonHolder}>
          <Button style={styles.logInButton}
            
          >
            <Text style={styles.myText}>Log In</Text>
          </Button>
          <Button style={styles.signUpButton}
            
          >
            <Text style={styles.myTextTwo}>Sign Up</Text>
          </Button>
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
    padding: 'margin',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 606,
  },
  logo: {
    flex: 1,
  }
});