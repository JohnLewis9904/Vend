// // import React, { useState } from "react";
// // import {
// //   Text,
// //   View,
// //   StyleSheet,
// //   Image,
// //   useWindowDimensions,
// // } from "react-native";
// // import Constants from "expo-constants";
// // import { AntDesign, Feather } from "@expo/vector-icons";
// // import uplodImageFromDevice from "../components/uploadImageFromDevice";
// // import getBlobFromUri from "../components/getBlobFromUri";
// // import manageFileUpload from "../components/manageFileUpload";
//  import FormInput from '../components/Form-Components/FormInput';
// // import colors from '../styles/colors'
// // export default function ItemUploadScreen() {
// //   const [imgURI, setImageURI] = React.useState(null);

// //   const [isUploading, setIsUploading] = React.useState(false);
// //   const [progress, setProgress] = React.useState(0);
// //   const [remoteURL, setRemoteURL] = React.useState("");

// //   const [error, setError] = React.useState(null);
// //   const { width } = useWindowDimensions();

// //   const[itemName, setItemName] = useState(null);
// //   const[itemPrice, setItemPrice] = useState(null);

// //   const handleLocalImageUpload = async () => {
// //     const fileURI = await uplodImageFromDevice();

// //     if (fileURI) {
// //       setImageURI(fileURI);
// //     }
// //   };

// //   const onStart = () => {
// //     setIsUploading(true);
// //   };

// //   const onProgress = (progress) => {
// //     setProgress(progress);
// //   };
// //   const onComplete = (fileUrl) => {
// //     setRemoteURL(fileUrl);
// //     setIsUploading(false);
// //     setImageURI(null);
// //   };

// //   const onFail = (error) => {
// //     setError(error);
// //     setIsUploading(false);
// //   };
// //   const handleCloudImageUpload = async () => {
// //     if (!imgURI) return;

// //     let fileToUpload = null;

// //     const blob = await getBlobFromUri(imgURI);

// //     await manageFileUpload(blob, { onStart, onProgress, onComplete, onFail}, itemName, itemPrice);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.text}>
// //       Item Application:
// //     </Text>
// //     <FormInput
// //       fn="Name"
// //       onChange={(itemName) => setItemName(itemName)}
// //     />
// //     <FormInput
// //       fn="Price"
// //       onChange={(itemPrice) => setItemPrice(itemPrice)}
// //     />
// //       {Boolean(imgURI) && (
// //         <View>
// //           <Image
// //             source={{ uri: imgURI }}
// //             resizeMode="contain"
// //             style={{ width, height: width }}
// //           />
// //         </View>
// //       )}

// //       {!isUploading && (
// //         <View style={styles.row}>
// //           <AntDesign
// //             name="addfile"
// //             size={36}
// //             color={imgURI ? "green" : "black"}
// //             onPress={handleLocalImageUpload}
// //           />

// //           {Boolean(imgURI) && (
// //             <Feather
// //               name="upload-cloud"
// //               size={36}
// //               color="black"
// //               onPress={handleCloudImageUpload}
// //             />
// //           )}
// //         </View>
// //       )}

// //       {isUploading && (
// //         <View style={styles.uploadProgressContainer}>
// //           <Text> Upload {progress} of 100% </Text>
// //         </View>
// //       )}

// //       {Boolean(remoteURL) && (
// //         <View style={{ paddingVertical: 20 }}>
// //           <Text>
// //             Image has been uploaded at
// //             <Text style={{ color: "blue" }}> {remoteURL} </Text>
// //           </Text>
// //         </View>
// //       )}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     paddingTop: Constants.statusBarHeight,
// //     backgroundColor: "#ecf0f1",
// //     padding: 8,
// //   },

// //   row: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "space-around",
// //     flexDirection: "row",
// //   },
// //   uploadProgressContainer: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   heading: {
// //     margin: 20,
// //     fontSize: 18,
// //     fontWeight: "bold",
// //   },
// //   selectButton: {
// //     height: 35,
// //     width: '100%',
// //     marginVertical: '5%',
// //     backgroundColor: colors.electric,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderRadius: 8,
// //   },
// //   text: {
// //     marginVertical: 20,
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: colors.slate,
// //   },
// //   buttonText: {
// //     fontWeight: 600,
// //     color: colors.lightGrey,
// //   },
// //   imageConatiner: {
// //     alignItems: 'center',
// //     marginVertical: '5%',
  
// //   },
// //   uploadButton: {
// //     height: 35,
// //     width: '100%',
// //     marginVertical: '5%',
// //     backgroundColor: colors.lightAccentGrey,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     borderRadius: 8,
// //   }
// // });
// import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, 
//   Button, ActivityIndicator } from 'react-native'
// import React, {useState} from 'react'
// import * as ImagePicker from 'expo-image-picker';
// import colors from '../styles/colors';
// import UserInputBox from '../components/UserInputBox';

// // import {firebase} from '../firebase';

// // import { col } from "../firebase";
// // import { addDoc } from "@firebase/firestore";

// export default function UploadScreen () {
// const [image, setImage] = useState(null);
// const [uploading, setUploading] = useState(false);


// const[itemName, setItemName] = useState(null);
// const[itemPrice, setItemPrice] = useState(null);

// const pickImage = async () => {
//  // no permissions request is necessary for launching the image library
//  let result = await ImagePicker.launchImageLibraryAsync({
//      mediaTypes: ImagePicker.MediaTypeOptions.All,
//      allowsEditing: true,
//      aspect: [4, 3],
//      quality: 1,
//  });


// //  console.log(result.assets);

// //  if (!result.canceled) {
// //      setImage(result.assets[0].uri)  // new code:
// //  }
// // };


// // New version of this method from a different tutorial
// // https://dev.to/adii9/uploading-images-to-firebase-storage-in-react-native-with-expo-workflow-24kj

// // const uploadImage = async () => {
// //  const blob = await new Promise((resolve, reject) => {
// //    const xhr = new XMLHttpRequest();
// //    xhr.onload = function() {
// //      resolve(xhr.response);
// //    };
// //    xhr.onerror = function() {
// //      reject(new TypeError('Network request failed'));
// //    };
// //    xhr.responseType = 'blob';
// //    xhr.open('GET', image, true);
// //    xhr.send(null);
// //  })
 
//  // tutorial has this reference, but this will always replace the image
//  // const ref = firebase.storage().ref().child(`Pictures/Image1`)

//  // this method will give a unique name to each image based on date stamp
// //  const ref = firebase.storage().ref().child(`Pictures/`+ (new Date().toISOString()))
// //  const snapshot = ref.put(blob)
// //  snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,
// //    ()=>{
// //      setUploading(true)
// //    },
// //    (error) => {
// //      setUploading(false)
// //      console.log(error)
// //      blob.close()
// //      return 
// //    },
// //    () => {
// //      snapshot.snapshot.ref.getDownloadURL().then((url) => {
// //        setUploading(false)
// //        // This could be saved into a variable if wanted to use it for something else
// //        console.log("Download URL: ", url)
// //        setImage(url)
// //        blob.close()

// //        addDoc(col, {
// //         Name: {itemName},
// //         Price: {itemPrice},
// //         Filename: {url},
// //     })

// //        return url
// //      })
// //    }
// //    )
// // }


// return (
// <SafeAreaView style={styles.container}>
// <Text style={styles.text}>
//   Item Application:
// </Text>
// <FormInput
//   fn="Name"
//   input = {(name) => setItemName(name)}
// />
// <FormInput
//   fn="Price"
//   input = {(price) => setItemPrice(price)}
// />
//  <TouchableOpacity style={styles.selectButton}>
//      <Text style={styles.buttonText}>Pick an image</Text>
//  </TouchableOpacity>
//  <View style={styles.imageContainer}>
//      {image && <Image source={{uri:image}} style={styles.image}/>}

//      {/* // the upload button doesn't have the styles - it is because it is a basic Button */}

//      {!uploading ? <Button title='Upload Image'  /> : 
//                    <ActivityIndicator size={'small'} color='black' />}

//  </View>
// </SafeAreaView>
// );
// }



// const styles = StyleSheet.create({
// container: {
//  flex: 1,
//  width: '100%',
//  alignItems: 'flex-start',
//  padding: 30,
//  backgroundColor: colors.lightGrey,
// },
// selectButton: {
//  borderRadius: 5,
//  width: 150,
//  height: 50,
//  backgroundColor: colors.electric,
//  alignItems: 'center',
//  justifyContent: 'center',
// },
// buttonText: {
//  color: 'white',
//  fontSize: 18,
//  fontWeight: 'bold',

// },
// uploadButton: {
//  borderRadius: 5,
//  width: 150,
//  height: 50,
//  backgroundColor: 'red',
//  alignItems: 'center',
//  justifyContent: 'center',
//  marginTop: 30,
// },
// imageContainer: {
//  marginTop: 30,
//  marginBottom: 50,
//  alignItems: 'center'
// }, 
// image: {
//  width:300, 
//  height:225,
//  marginBottom: 30,
// },
// text: {
//   marginVertical: 20,
//   marginTop: 30,
//   fontSize: 20,
//   fontWeight: 'bold',
//   color: colors.slate,
// },

// })
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
import { TextInput } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
 import FormInput from '../components/Form-Components/FormInput';

//import Constants from "expo-constants";
import SignInButton from "../components/SignInButton";
import SignInSources from "../components/SignInSources";
import GoogleButton from "react-google-button";
import Shop from "./Shop";
// import {
//     Checkbox
//   } from 'react-native-paper';
import { useState } from "react";

// You can import from local files
import colors from "../styles/colors";

// or any pure javascript modules available in npm
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from "@firebase/auth";
// import { auth, provider } from "../firebase";
// import { TextInput } from "react-native-paper";
import UserInputBox from "../components/UserInputBox";

export default function DetailView({ navigation }) {
  //const [isChecked, setChec ked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [checked, setChecked] = React.useState(false);

  const handleSignUp = () => {
    navigation.navigate("HomeScreen")
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log('Registered with:', user.email);
        
    //   })
    //   .catch((error) => alert(error.message));
  };
  const [image, setImage] = useState(null);
const [uploading, setUploading] = useState(false);


const[itemName, setItemName] = useState(null);
const[itemPrice, setItemPrice] = useState(null);

const pickImage = async () => {
 // no permissions request is necessary for launching the image library
 let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
 });


 console.log(result.assets);

 if (!result.canceled) {
     setImage(result.assets[0].uri)  // new code:
 }
};


// New version of this method from a different tutorial
// https://dev.to/adii9/uploading-images-to-firebase-storage-in-react-native-with-expo-workflow-24kj

const uploadImage = async () => {
 const blob = await new Promise((resolve, reject) => {
   const xhr = new XMLHttpRequest();
   xhr.onload = function() {
     resolve(xhr.response);
   };
   xhr.onerror = function() {
     reject(new TypeError('Network request failed'));
   };
   xhr.responseType = 'blob';
   xhr.open('GET', image, true);
   xhr.send(null);
 })
 
//  tutorial has this reference, but this will always replace the image
//  const ref = firebase.storage().ref().child(`Pictures/Image1`)

//  this method will give a unique name to each image based on date stamp
//  const ref = firebase.storage().ref().child(`Pictures/`+ (new Date().toISOString()))
//  const snapshot = ref.put(blob)
//  snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,
//    ()=>{
//      setUploading(true)
//    },
//    (error) => {
//      setUploading(false)
//      console.log(error)
//      blob.close()
//      return 
//    },
//    () => {
//      snapshot.snapshot.ref.getDownloadURL().then((url) => {
//        setUploading(false)
//        // This could be saved into a variable if wanted to use it for something else
//        console.log("Download URL: ", url)
//        setImage(url)
//        blob.close()

//        addDoc(col, {
//         Name: {itemName},
//         Price: {itemPrice},
//         Filename: {url},
//     })

//        return url
//      })
//    }
//    )
}

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
        style={styles.image}
        source={require('../assets/kuldeep.jpg')}
        />
        


      <View style={[{margin: 10}]}></View>
        
        <Text style={[styles.title, { fontSize: 18 }, { fontWeight: "bold" }]}>
          Flux Hoodie (Receipt)
        </Text>
        
  
        <Text style={[styles.title,{ fontSize: 16 }, { fontWeight: "normal" }, {marginBottom: 20}]}>
            $45.00
        </Text>
        <Text style={[styles.title,{ fontSize: 16 }, { fontWeight: "normal" }]}>
            Vendor: Aashman Sharma
        </Text>
        <Text style={[styles.title,{ fontSize: 16 }, { fontWeight: "normal" }, {marginBottom: 20}]}>
            Vendor #: 123-456-7890
        </Text>
        
        <SignInButton  title={"Contact Vendor"} onPress={handleSignUp} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    backgroundColor: 'white',
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
    backgroundColor: colors.lightAccentGrey,
    borderRadius: 2,
  },
  header: {
    marginTop: 40,

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
  checkbox: {
    marginLeft: "8%",
    flexDirection: "row",
  },
  input: {
    marginHorizontal: "8%",
    marginVertical: "3%",
    padding: 10,
    width: "84%",
    height: 30,

    backgroundColor: "white",
    color: colors.lightestgray,
    borderRadius: 10,
    borderTopStartRadius: 10,
    borderTopRightRadius: 10,
    borderColor: colors.lightAccentGrey,
    borderWidth: 2,
  },
  logo :{
    backgroundColor: colors.electric,
    height: 40,
    width: 40,
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: '44%',

  },
});
