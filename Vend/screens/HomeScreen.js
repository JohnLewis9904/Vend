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
import LargeBanner from "../components/LargeBanner";
import SmallBanner from "../components/SmallBanner";
import UpdateBanner from "../components/UpdateBanner";

// You can import from local files
import colors from "../styles/colors";

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.namePlate}>
          <Text style={styles.normalText}>Welcome back!</Text>
          <Text style={styles.name}>Kuldeep Debnath</Text>
        </View>
        <View style={styles.iconPlate}>
          <Image
            style={styles.profileIcon}
            source={require("../assets/splash.png")}
          />
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
              path={require("../assets/splash.png")}
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
              title="Monkey!"
              body="Que cono!"
              btnName="Monkify"
              link="https://www.apple.com/"
              path={require("../assets/splash.png")}
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
              path={require("../assets/splash.png")}
            />
          </View>
          <View style={styles.bannerArea}>
            <SmallBanner
              title="Johns Jimmys!"
              path={require("../assets/splash.png")}
            />
          </View>
          <View style={[styles.bannerArea, { marginRight: 20 }]}>
            <SmallBanner
              title="Shashanks Sambar!"
              path={require("../assets/splash.png")}
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
export default HomeScreen;
