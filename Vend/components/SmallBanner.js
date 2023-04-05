import React from "react";
import { View, Text, StyleSheet, Image,ImageBackground  } from "react-native";
import colors from "../styles/colors";
import BannerButton from "./BannerButton";

function SmallBanner({ title, path }) {
  return (
    <View>
      <View style={styles.background}>
        <View style={styles.imageDimens}>
          <ImageBackground  style={styles.viewImage}   imageStyle={{ borderRadius: 15}}
source={path} >
            <View style={styles.caption}>
              <View style={styles.captionbg}>
                <Text style={styles.header}>{title}</Text>
              </View>
            </View>
          </ImageBackground >
          
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "20%",
    backgroundColor: colors.slate,
    color: colors.slate,
  },
  header: {
    padding: 10,
    color: "white",
    fontWeight: "bold",
    opacity: 2,

  },
  background: {
    marginLeft: 20,

    borderRadius: 12.5
  },
  imageDimens:{
    borderRadius: 12.5,
    marginRight: 0,
  }
  ,
  viewImage: {
    width: 150,
    height: 150,
    borderRadius: 12.5,
    justifyContent: "flex-end",

  },
  caption: {
    justifyContent: "flex-end",
    zIndex: 100,
    opacity: 0.65,

  },
  captionbg: {
    backgroundColor: "black",
    width: 150,
    alignItems: "center",

    borderBottomRightRadius: 12.5,
    borderBottomLeftRadius: 12.5,
  },
});
export default SmallBanner;
