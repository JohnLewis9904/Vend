import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../styles/colors";
import BannerButton from "./BannerButton";

function LargeBanner({ title, body, btnName, link, path }) {
  return (
    <View>
      <View style={[styles.background, styles.shadowProp]}>
        <View style={styles.textArea}>
          <Text style={styles.header}>{title}</Text>
          <Text style={styles.normal}>{body}</Text>
          <BannerButton title={btnName} link={link} />
        </View>
        <View style={styles.imageDimens}>
          <Image style={styles.viewImage} source={path} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    backgroundColor: colors.slate,
    color: colors.slate,
    margin: "8%",
  },
  background: {
    backgroundColor: "white",
    height: 175.0,
    borderRadius: 12.5,
    padding: 20,
    flexDirection: "row",
    marginLeft: 10,
  },
  header: {
    color: colors.slate,

    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 5,
  },
  normal: {
    color: colors.slate,

    width: 150,
    fontSize: 12,
  },
  imageDimens: {
    justifyContent: "center",
  },
  viewImage: {
    width: 150,
    height: 150,
    borderRadius: 6.25,
    marginLeft: 20,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
export default LargeBanner;
