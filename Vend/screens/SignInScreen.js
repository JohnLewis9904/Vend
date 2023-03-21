import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";
import Constants from "expo-constants";
import UserInputBox from "../components/UserInputBox";
import SIB from "../components/SignInButton";
import SignInSources from "../components/SignInSources";
// import {
//     Checkbox
//   } from 'react-native-paper';
import { useState } from "react";

// You can import from local files
import colors from "../styles/colors";

// or any pure javascript modules available in npm
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";

const handleSignUp = () => {
  auth
  .createUserWithEmailAndPassword(email, password)
  .then(userCredentials => {
    const user = userCredentials.user;
    console.log(user.email);
  })
  .catch(error => alert(error.message))
}

export default function SignInScreen() {
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={[styles.options, { color: colors.electric }]}>
            Login
          </Text>
          <Text style={styles.options}>Register</Text>
        </View>
        <View style={styles.barArea}>
          <View
            style={[
              styles.bar,
              { marginLeft: "8%" },
              { backgroundColor: colors.electric },
              { borderTopRightRadius: 0 },
              { borderBottomRightRadius: 0 },
            ]}
          ></View>
          <View
            style={[
              styles.bar,
              { marginRight: "8%" },
              { borderTopLeftRadius: 0 },
              { borderBottomLeftRadius: 0 },
            ]}
          ></View>
        </View>
        <Text style={[styles.title, { fontSize: 24 }, { fontWeight: "heavy" }]}>
          Sign In
        </Text>
        <Text style={[styles.title, { marginBottom: "5%" }]}>
          Welcome back!
        </Text>
        <UserInputBox fn="Username" onChangeText={text => setEmail(text)}/>
        <UserInputBox fn="Password" onChangeText={text => setPassword(text)}/>
        <SIB title={"Login"} />
        <View style={styles.barArea}>
          {/* <Checkbox
              color={isChecked ? colors.electric : undefined}
            value={isChecked}
            onValueChange={setChecked}
            />  */}
          <Text
            style={[
              { color: colors.slate },
              { marginLeft: "2%" },
              { marginTop: 1 },
              { fontSize: 16 },
            ]}
          >
            Remember me
          </Text>
        </View>
        <Image
          source={require("../assets/border.png")}
          style={{
            width: "82%",
            height: 20,
            marginHorizontal: "8%",
            marginTop: "9%",
          }}
        />
        <View style={styles.pagination}>
          <SignInSources
            style={styles.box}
            path={require("../assets/google.jpg")}
          />
          <SignInSources
            style={styles.box}
            path={require("../assets/google.jpg")}
          />
          <SignInSources
            style={styles.box}
            path={require("../assets/google.jpg")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: "10%",
    backgroundColor: "#fbf9f9",
  },
  barArea: {
    flexDirection: "row",
    marginTop: "1%",
  },
  splash: {
    justifyContent: "center",
    height: "20%",
    width: "40%",
  },
  bar: {
    height: 3,
    width: "42%",
    backgroundColor: colors.lightestgray,
    borderRadius: 2,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  options: {
    fontSize: 15,
    fontWeight: 500,
    paddingHorizontal: "15%",
    paddingTop: "5%",
    paddingBottom: "3%",
    color: colors.slate,
  },
  title: {
    marginLeft: "8%",
    paddingTop: "4%",
    fontSize: 16,
    color: colors.slate,
  },
  checkbox: {
    marginLeft: "8%",
    borderRadius: 5,
  },
  pagination: {
    flex: 1,
    flexDirection: "row",
  },
});
