import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

function SearchBar({ fn, keyboard, secureTextEntry, input, nums }) {
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
      <AntDesign
        style={styles.searchIcon}
        name="search1"
        size={24}
        color="grey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    backgroundColor: 'white',
    height: 50,
    paddingTop: 10,
    paddingRight: 20,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  input: {
    backgroundColor: 'white',
    color: 'grey',
    paddingLeft: 15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    paddingRight: 100,
    height: 50,
  },
});
export default SearchBar;
