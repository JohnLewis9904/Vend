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
// You can import from local files
import colors from "../styles/colors";

function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.profile} source={require("../assets/google.jpg")} />
      <Text>User Name</Text>
      <View style={styles.bar}></View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  profile: {
    alignItems: "center",
    margin: 10,
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  bar: {
    height: 2,
    width: "100%",
    backgroundColor: colors.lightestgray,
    marginBottom: 9,
  },
});
export default ProfileScreen;
