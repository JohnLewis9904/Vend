import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Touchable,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import { useState } from "react";

import Item from "../components/Item";
import CategoryIcon from "../components/CategoryIcon";
import SearchBar from "../components/SearchBar";

// import SearchBar from "../components/Searchbar"
// You can import from local files
import colors from "../styles/colors";

// // Firebase imports
// import { auth, database, col } from "../firebase";
// import { collection, addDoc, getDocs } from "@firebase/firestore";

function Shop() {
  const [username, setUsername] = useState("");

  const [selected, setSelected] = React.useState("");

  const [items, setItems] = useState([]);
  // React.useEffect(async () => {
  //   col.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       const { Name, Price, Filename } = doc.data();
  //       items.push({
  //         id: doc.id,
  //         Filename,
  //         Name,
  //         Price,
  //       });
  //     });
  //     setItems(items);
  //   });
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
        title="Load Items"
        style={styles.button}
        onPress={() =>
          getDocs(col)
            .then((snapshot) => {
              let items = [];
              snapshot.docs.forEach((doc) => {
                items.push({ ...doc.data(), id: doc.id });
              });
              console.log(items);
            })
            .catch((error) => {
              console.log(erorr.message);
            })
            .then(console.log("item has been added"))
        }
      /> */}
        <SearchBar fn="Username" input={setUsername} />
      <View style={styles.header}>
        {/* <View style={styles.searchBar}>
        <SearchBar fn="Username" input={setUsername} />
        </View> */}
        <View style={styles.cartIcon}></View>
      </View>
      <View style={styles.itemList}>
        <FlatList
          data={items}
          renderItem={({ obj }) => (
            <Item
              header={obj.Name}
              body={obj.Price}
              path={obj.Filename}
            />
          )}
        />
      </View>
      <View>
        <View style={styles.categoryRow}>
          <CategoryIcon name="Shirts" path={require("../assets/tshirt.jpg")} />
          <CategoryIcon name="Pants" path={require("../assets/panticon.jpg")} />
          <CategoryIcon
            name="Hoodies"
            path={require("../assets/hoodieicon.jpg")}
          />
          <CategoryIcon
            name="Uniforms"
            path={require("../assets/unifrom.jpg")}
          />
        </View>
        <View style={styles.categoryRow}>
          <Item
            header="Cotton Shirt Regular Fit"
            body="$23.00"
            path={require("../assets/shirt1.jpg")}

          />
          <Item
            header="Flux Hoodie"
            body="$45.00"
            path={require("../assets/shirt2.jpg")}

          />
        </View>
        <View style={styles.categoryRow}>
          <Item
            header="Fremd Soccer Uniform"
            body="$30.00"
            path={require("../assets/shirt3.jpg")}

          />
          <Item
            header="Gadha Hoodie"
            body="$35.00"
            path={require("../assets/shirt4.jpg")}

          />
        </View>
        <View style={styles.categoryRow}>
          <Item
            header="Striped T Shirt (Green/Yellow)"
            body="$14.00"
            path={require("../assets/shirt5.jpg")}

          />
          <Item
            header="MUN Hoodie"
            body="$29.00"
            path={require("../assets/shirt6.jpg")}

          />
        </View>

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
    padding: 20,
    paddingTop: 40,
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
  categoryRow: {
    justifyContent: 'center',
    flexDirection: "row",
  },
});
export default Shop;
