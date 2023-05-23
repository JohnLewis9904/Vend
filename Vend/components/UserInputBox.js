import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import colors from '../styles/colors';
import Constants from 'expo-constants';

function UserInputBox({ fn, keyboard, secureTextEntry, input, nums, right }) {
  
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType={keyboard}
        onChangeText={input}
        selectionColor={colors.slate}
        activeOutlineColor={colors.slate}
        activeUnderlineColor={colors.electric}
        outlineColor={colors.slate}
        underlineColor={colors.electric}

        label={fn}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        clearButtonMode="always" // only works in iOS, the x appears when you start to type
        maxLength={nums}
        right={right}
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
    width: '84%',
    backgroundColor: 'white',
    color: colors.lightGrey,
    borderColor: colors.lightAccentGrey,
    borderWidth: 2,
  },
});
export default UserInputBox;
