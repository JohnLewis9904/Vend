import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Touchable,
  ScrollView,
} from "react-native";
import { useState } from "react";

import Searchbar from "../components/Searchbar";

// You can import from local files
import colors from "../styles/colors";
import SearchBar from "../components/Searchbar";

function Shop() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.searchBar}>
            <SearchBar/>
        </View>
        <View style={styles.cartIcon}></View>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    width: "100%",
    height: "100%",
    color: colors.slate,
  },
  namePlate: {
    margin: "8%",
    color: colors.slate,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.slate,
  },
  header: {
    flexDirection: "row",
  },
  iconPlate: {
    marginLeft: "25%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  profileIcon: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    borderRadius: 25,
  },
});
export default Shop;
