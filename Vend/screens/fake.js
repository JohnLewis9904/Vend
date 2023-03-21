import React from "react";
import { View, StyleSheet } from "react-native";

function Fake() {
  return <View style={styles.button}></View>;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    width: "100%",
    height: "100%",
  },
});
export default Fake;
