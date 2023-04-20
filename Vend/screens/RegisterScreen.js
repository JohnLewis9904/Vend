import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Alert,
  Pressable,
} from "react-native";
//import Constants from "expo-constants";
import SignInButton from "../components/SignInButton";
import SignInSources from "../components/SignInSources";
import GoogleButton from 'react-google-button'
// import {
//     Checkbox
//   } from 'react-native-paper';
import { useState } from "react";

// You can import from local files
import colors from "../styles/colors";

// or any pure javascript modules available in npm
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { auth, provider } from "../firebase";
import { TextInput } from "react-native-paper";
import UserInputBox from "../components/UserInputBox";

export default function SignInScreen({navigation}) {
  //const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        navigation.navigate("HomeScreen")
      })
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
            <Pressable
            onPress={() => navigation.navigate("SignInScreen")}>
                <Text style={styles.options}>
                    Login
                </Text>
            </Pressable>
        <Text style={[styles.options, { color: colors.electric }]}>Register</Text>
          
        </View>
        <View style={styles.barArea}>
          <View
            style={[
              styles.bar,
              { marginLeft: "8%" },
              
              { borderTopRightRadius: 0 },
              { borderBottomRightRadius: 0 },
            ]}
          ></View>
          <View
            style={[
              styles.bar,
              { marginRight: "8%" },
              { backgroundColor: colors.electric },
              { borderTopLeftRadius: 0 },
              { borderBottomLeftRadius: 0 },
            ]}
          ></View>
        </View>
        <Text style={[styles.title, { fontSize: 24 }, { fontWeight: "heavy" }]}>
          Register
        </Text>
        <Text style={[styles.title, { marginBottom: "5%" }]}>
          Enter your email and create a password
        </Text>
        <UserInputBox
          input={text => setEmail(text)}
          fn={"Email"}
          nums={38}
        />
        <UserInputBox
          input={text => setPassword(text)}
          fn={"Password"}
          secureTextEntry={true}
          nums={65}
        />
        <SignInButton
          title={"Sign Up"}
          onPress={handleSignUp}
        />
        <View style={styles.barArea}>
          {/* <Checkbox
              color={isChecked ? colors.electric : undefined}
            value={isChecked}
            onValueChange={setChecked}
            />  */}
        </View>
        <Text>{this.email}</Text>
        <View style={styles.pagination}>
        <Pressable
          onClick={() => { console.log('Google button clicked') }}
          style={styles.pagination}
        >
          <Image source={'../assets/googlebutton.PNG'}/>
        </Pressable>
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
  input: {
    marginHorizontal: '8%',
    marginVertical: '3%',
    padding: 10,
    width: '84%',
    height: 30,

    backgroundColor: 'white',
    color: colors.lightestgray,
    borderRadius: 10,
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,
    borderColor: colors.lightAccentGrey,
    borderWidth: 2,
  }
});
