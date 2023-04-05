import React from "react";
import { TouchableOpacity, Linking, Text, StyleSheet } from "react-native";

function BannerButton({
  title,
  link,
  underlayColor,
  backgroundColor,
  fontSize,
}) {
  return (
    <TouchableOpacity
      onPress={() => Linking.openURL(link)}
      style={styles.button}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 30,
    marginTop: 18,
    marginRight: 18,
    width: 100,
    backgroundColor: "#FFD15E",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6.25,
  },
  text: {
    fontWeight: 600,
    color: "white",
    fontSize: 12,
  },
});
export default BannerButton;
