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

import Item from "../components/Item";
import SearchBar from "../components/Searchbar"
// You can import from local files
import colors from "../styles/colors";

function Shop() {
  const [username, setUsername] = useState('');

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <View style={styles.searchBar}>
        <SearchBar fn="Username" input={setUsername} />
        </View>
        <View style={styles.cartIcon}></View>

        </View>
        <View style={styles.itemList}>
          <Item
            header="Cotton T Shirt"
            body="$32"
            path={require("../assets/springReleaseBanner.jpeg")}
          />
           <Item
            header="Nike Tech"
            body="$65"
            path={require("../assets/monkeyBanner.jpg")}
          />
           <Item
            header="Adidas Puffer"
            body="$20"
            path={require("../assets/border.png")}
          />
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
