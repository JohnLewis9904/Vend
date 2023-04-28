import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import colors from './../../styles/colors';
import Constants from 'expo-constants';

function FormInput({ fn, keyboard, secureTextEntry, input, nums }) {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={keyboard}
        onChangeText={input}
        placeholder={fn}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        clearButtonMode="always" // only works in iOS, the x appears when you start to type
        maxLength={nums}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
  },
  input: {

    margin: 10,
    padding: 10,
    backgroundColor: colors.lightGrey,
    backgroundOpacity: 0.5,
    color: colors.slate,
    width: Constants.statusBarWidth,
    borderRadius: 8,
  },
});
export default FormInput;
