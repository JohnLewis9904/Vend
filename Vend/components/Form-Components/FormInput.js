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
    alignItems: 'flex-start',
  },
  
  input: {

    padding: 10,
    borderColor: colors.lightestgray,
    borderWidth:2,
    backgroundColor: colors.lightGrey,
    color: colors.lightGrey,
    width: '84%',

    borderRadius: 8,
    marginVertical: 10,
    marginHorizontal:'8%',
  },
});
export default FormInput;
