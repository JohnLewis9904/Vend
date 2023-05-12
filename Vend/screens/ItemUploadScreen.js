// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   useWindowDimensions,
// } from "react-native";
// import Constants from "expo-constants";
// import { AntDesign, Feather } from "@expo/vector-icons";
// import uplodImageFromDevice from "../components/uploadImageFromDevice";
// import getBlobFromUri from "../components/getBlobFromUri";
// import manageFileUpload from "../components/manageFileUpload";
// import FormInput from '../components/Form-Components/FormInput';
// import colors from '../styles/colors'
// export default function ItemUploadScreen() {
//   const [imgURI, setImageURI] = React.useState(null);

//   const [isUploading, setIsUploading] = React.useState(false);
//   const [progress, setProgress] = React.useState(0);
//   const [remoteURL, setRemoteURL] = React.useState("");

//   const [error, setError] = React.useState(null);
//   const { width } = useWindowDimensions();

//   const[itemName, setItemName] = useState(null);
//   const[itemPrice, setItemPrice] = useState(null);

//   const handleLocalImageUpload = async () => {
//     const fileURI = await uplodImageFromDevice();

//     if (fileURI) {
//       setImageURI(fileURI);
//     }
//   };

//   const onStart = () => {
//     setIsUploading(true);
//   };

//   const onProgress = (progress) => {
//     setProgress(progress);
//   };
//   const onComplete = (fileUrl) => {
//     setRemoteURL(fileUrl);
//     setIsUploading(false);
//     setImageURI(null);
//   };

//   const onFail = (error) => {
//     setError(error);
//     setIsUploading(false);
//   };
//   const handleCloudImageUpload = async () => {
//     if (!imgURI) return;

//     let fileToUpload = null;

//     const blob = await getBlobFromUri(imgURI);

//     await manageFileUpload(blob, { onStart, onProgress, onComplete, onFail}, itemName, itemPrice);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>
//       Item Application:
//     </Text>
//     <FormInput
//       fn="Name"
//       onChange={(itemName) => setItemName(itemName)}
//     />
//     <FormInput
//       fn="Price"
//       onChange={(itemPrice) => setItemPrice(itemPrice)}
//     />
//       {Boolean(imgURI) && (
//         <View>
//           <Image
//             source={{ uri: imgURI }}
//             resizeMode="contain"
//             style={{ width, height: width }}
//           />
//         </View>
//       )}

//       {!isUploading && (
//         <View style={styles.row}>
//           <AntDesign
//             name="addfile"
//             size={36}
//             color={imgURI ? "green" : "black"}
//             onPress={handleLocalImageUpload}
//           />

//           {Boolean(imgURI) && (
//             <Feather
//               name="upload-cloud"
//               size={36}
//               color="black"
//               onPress={handleCloudImageUpload}
//             />
//           )}
//         </View>
//       )}

//       {isUploading && (
//         <View style={styles.uploadProgressContainer}>
//           <Text> Upload {progress} of 100% </Text>
//         </View>
//       )}

//       {Boolean(remoteURL) && (
//         <View style={{ paddingVertical: 20 }}>
//           <Text>
//             Image has been uploaded at
//             <Text style={{ color: "blue" }}> {remoteURL} </Text>
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: "#ecf0f1",
//     padding: 8,
//   },

//   row: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "space-around",
//     flexDirection: "row",
//   },
//   uploadProgressContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   heading: {
//     margin: 20,
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   selectButton: {
//     height: 35,
//     width: '100%',
//     marginVertical: '5%',
//     backgroundColor: colors.electric,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//   },
//   text: {
//     marginVertical: 20,
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: colors.slate,
//   },
//   buttonText: {
//     fontWeight: 600,
//     color: colors.lightGrey,
//   },
//   imageConatiner: {
//     alignItems: 'center',
//     marginVertical: '5%',
  
//   },
//   uploadButton: {
//     height: 35,
//     width: '100%',
//     marginVertical: '5%',
//     backgroundColor: colors.lightAccentGrey,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//   }
// });
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, 
  Button, ActivityIndicator } from 'react-native'
import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';

import {firebase} from '../firebase';

export default function UploadScreen () {
const [image, setImage] = useState(null);
const [uploading, setUploading] = useState(false);

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
 
 // tutorial has this reference, but this will always replace the image
 // const ref = firebase.storage().ref().child(`Pictures/Image1`)

 // this method will give a unique name to each image based on date stamp
 const ref = firebase.storage().ref().child(`Pictures/`+ (new Date().toISOString()))
 const snapshot = ref.put(blob)
 snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,
   ()=>{
     setUploading(true)
   },
   (error) => {
     setUploading(false)
     console.log(error)
     blob.close()
     return 
   },
   () => {
     snapshot.snapshot.ref.getDownloadURL().then((url) => {
       setUploading(false)
       // This could be saved into a variable if wanted to use it for something else
       console.log("Download URL: ", url)
       setImage(url)
       blob.close()
       return url
     })
   }
   )
}


return (
<SafeAreaView style={styles.container}>

 <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
     <Text style={styles.buttonText}>Pick an image</Text>
 </TouchableOpacity>
 <View style={styles.imageContainer}>
     {image && <Image source={{uri:image}} style={styles.image}/>}

     {/* // the upload button doesn't have the styles - it is because it is a basic Button */}

     {!uploading ? <Button title='Upload Image'  onPress={uploadImage} /> : 
                   <ActivityIndicator size={'small'} color='black' />}

 </View>
</SafeAreaView>
)
}


const styles = StyleSheet.create({
container: {
 flex: 1,
 width: '90%',
 alignItems: 'center',
 marginTop: 25,
 backgroundColor: 'grey',
 justifyContent: 'center'
},
selectButton: {
 borderRadius: 5,
 width: 150,
 height: 50,
 backgroundColor: 'blue',
 alignItems: 'center',
 justifyContent: 'center',
},
buttonText: {
 color: 'white',
 fontSize: 18,
 fontWeight: 'bold',

},
uploadButton: {
 borderRadius: 5,
 width: 150,
 height: 50,
 backgroundColor: 'red',
 alignItems: 'center',
 justifyContent: 'center',
 marginTop: 30,
},
imageContainer: {
 marginTop: 30,
 marginBottom: 50,
 alignItems: 'center'
}, 
image: {
 width:300, 
 height:225,
 marginBottom: 30,
}

})