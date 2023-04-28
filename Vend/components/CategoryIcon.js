import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

function CategoryIcon({ name, color, icpapaththnn }) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.icon}>
          <Image
            style={{
              resizeMode: 'contain',
              height: 40,
              width: 50,
            }}
            source={require('@expo/snack-static/react-native-logo.png')}
          />
        </View>
        <View style={styles.name}>
          <Text style={styles.text}>{name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  box: {
    width: 70,
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#CACACA',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    color: '#494A4A',
    fontSize: 16,
  },
  name: {
    marginBottom: 4,
  },
});
export default CategoryIcon;