import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import Constants from 'expo-constants';

function SignInBar(left) {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, { backgroundColor: colors.electric }]}></View>
      <View style={styles.bar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  
  bar: {
    height: 3,
    marginHorizontal: '8%',
    backgroundColor: colors.slate,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
});
export default SignInBar;
