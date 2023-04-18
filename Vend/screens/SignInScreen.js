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

  const handleLogIn = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigation.navigate("HomeScreen")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
  }

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        navigation.navigate("HomeScreen")
      })
      .catch((error) => alert(error.message));
  };

  // const signInWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  // .then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   // const credential = GoogleAuthProvider.credentialFromResult(result);
  //   // const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   console.log("Login success")
  //   navigation.navigate("fake")
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // name = user.displayName, email = user.email etc
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   console.log("Issue with login")
  //   // ...
  // });
  // }
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
          title={"Login"}
          onPress={handleLogIn}
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
        <Text>{this.email}</Text>
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
