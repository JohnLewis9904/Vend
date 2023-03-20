import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";
import Constants from "expo-constants";

function SignInSources({ path }) {
  return (
    <View style={styles.viewContainer}>
      <Image style={styles.viewImage} source={path} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    height: "9%",
    width: "9%",
    borderRadius: 15,
    margin: "10%",
  },
  viewImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "#c4c2c2",
    borderWidth: 1,
  },
});
export default SignInSources;
