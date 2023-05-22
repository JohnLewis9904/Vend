import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Touchable,
  ScrollView,
  Pressable,
} from "react-native";
import { useState } from "react";
import LargeBanner from "../components/LargeBanner";
import SmallBanner from "../components/SmallBanner";
import UpdateBanner from "../components/UpdateBanner";

// Firebase imports
import { auth, database, col } from "../firebase";
import { collection, addDoc, getDocs } from "@firebase/firestore";

// You can import from local files
import colors from "../styles/colors";
import { Button } from "react-native-paper";
import { QuerySnapshot } from "firebase/firestore";
import ItemUploadScreen from "./ItemUploadScreen";

function HomeScreen({ navigation }) {
  const [selected, setSelected] = React.useState("");
  const goToNextPage = () => {
    navigation.navigate("ItemUploadScreen");
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log('Registered with:', user.email);

    //   })
    //   .catch((error) => alert(error.message));
  };
  const [items, setItems] = useState([]);
  // React.useEffect(async () => {
  //   col.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       const { imageId, name } = doc.data();
  //       items.push({
  //         id: doc.id,
  //         imageId,
  //         name,
  //       });
  //     });
  //     setItems(items);
  //   });
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button
      style={styles.button}
            onPress={() =>
              getDocs(col)
                .then((snapshot) => {
                  let items = []
                  snapshot.docs.forEach((doc) => {
                  items.push({...doc.data(), id: doc.id})
        })
        console.log(items)
    })
    .catch(error =>{
        console.log(erorr.message)
    })
          .then(console.log("item has been added"))
        }
          /> */}
      <View style={styles.header}>
        <View style={styles.namePlate}>
          <Text style={styles.normalText}>Welcome back!</Text>
          <Text style={styles.name}>Kuldeep Debnath</Text>
        </View>
        <View style={styles.iconPlate}>
          <Button onPress={goToNextPage}>
            <Image
              style={styles.profileIcon}
              source={require("../assets/splash.png")}
            />
          </Button>
        </View>
      </View>
      <View>
        {/* Large Banner Area */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.bannerArea}>
              <LargeBanner
                title="Spring Releases"
                body="Check out whats releasing this Spring 2023 season!"
                btnName="Learn More"
                link="https://www.apple.com/"
                path={require("../assets/google.jpg")}
              />
          </View>
          <View style={styles.bannerArea}>
            <LargeBanner
              title="Hot Deals"
              body="Spend and Save this Spring reak!"
              btnName="Explore"
              link="https://www.apple.com/"
              path={require("../assets/splash.png")}
            />
          </View>
          <View style={styles.bannerArea}>
            <LargeBanner
              title="New Drops!"
              body="Get the newest styles now!"
              btnName="Go"
              link="https://www.apple.com/"
              path={require("../assets/shop1.jpg")}
            />
          </View>
        </ScrollView>
        <Text
          style={[
            styles.name,
            { color: colors.slate },
            { margin: "8%" },
            { marginVertical: "4%" },
          ]}
        >
          Shocking Sale!
        </Text>
        {/* Small Sale Area */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.bannerArea}>
            <SmallBanner
              title="15K Sold Out"
              path={require("../assets/rishi.png")}
            />
          </View>
          <View style={styles.bannerArea}>
            <SmallBanner
              title="Johns Jimmys!"
              path={require("../assets/sai.png")}
            />
          </View>
          <View style={[styles.bannerArea, { marginRight: 20 }]}>
            <SmallBanner
              title="Shashanks Sambar!"
              path={require("../assets/denna.png")}
            />
          </View>
        </ScrollView>
        <View style={styles.bannerArea}>
          <UpdateBanner
            title="15K Sold Out"
            body="Check out whats releasing this Spring 2023 season!"
            btnName="Learn More"
          />
        </View>
      </View>
      <Pressable
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
  button: {
    height: 35,
    marginVertical: "10%",

    marginHorizontal: "8%",
    width: "84%",
    backgroundColor: colors.electric,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
export default HomeScreen;
