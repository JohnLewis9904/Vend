import React from 'react';
import { TouchableOpacity, Linking, Text, StyleSheet } from 'react-native';
import colors from './../../styles/colors';
import Constants from 'expo-constants';

function FormSubmit({ title, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 35,
    margin: 10,
    width: Constants.statusBarWidth,
    backgroundColor: colors.electric,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    fontWeight: 600,
    color: colors.slate,
  },
});
export default FormSubmit;
