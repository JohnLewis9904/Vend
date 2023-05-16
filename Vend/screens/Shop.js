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

// import SearchBar from "../components/Searchbar"
// You can import from local files
import colors from "../styles/colors";

// Firebase imports
import { auth, database, col } from "../firebase";
import { collection, addDoc, getDocs } from "@firebase/firestore";

function Shop() {
  const [username, setUsername] = useState("");

  const [selected, setSelected] = React.useState("");

  const [items, setItems] = useState([]);
  React.useEffect(async () => {
    col.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        const { Name, Price, Filename, Size } = doc.data();
        items.push({
          id: doc.id,
          Filename,
          Name,
          Price,
          Size,
        });
      });
      setItems(items);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Button
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
      />

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
          <CategoryIcon name="Pants" path={require("../assets/favicon.png")} />
          <CategoryIcon name="Shirts" path={require("../assets/favicon.png")} />
          <CategoryIcon
            name="Hoodies"
            path={require("../assets/favicon.png")}
          />
          <CategoryIcon
            name="Uniforms"
            path={require("../assets/favicon.png")}
          />
        </View>
        <Item
          header="Soundtrack App"
          body="Rate soundtracks using a database"
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
    padding: 50,
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
    flexDirection: "row",
  },
});
export default Shop;
