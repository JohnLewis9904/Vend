import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import colors from '../styles/colors';
import Constants from 'expo-constants';

function UserInputBox({ fn, keyboard, secureTextEntry, input, nums }) {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={keyboard}
        onChangeText={input}
        label={fn}
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
    // alignItems: 'flex-start',
  },
  input: {
    marginHorizontal: '8%',
    marginVertical: '3%',
    padding: 10,
    width: '84%',

    backgroundColor: 'white',
    color: colors.lightestgray,
    borderRadius: 8,
    borderColor: colors.lightAccentGrey,
    borderWidth: 2,
  },
});
export default UserInputBox;
