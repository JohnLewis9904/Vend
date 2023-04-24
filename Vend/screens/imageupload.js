import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from'firebase/storage';
import { v4 } from "uuid";

export default function App() {

  const [imageUpload, setImageUpload] = useState(null)
  const [imageName, setImageName] = useState("");

  const uploadImage = () => {
    if (imageUpload == null) return;
    setImageName(`images/${imageUpload.name + v4()}`);
    const imageRef = ref(storage, imageName);
      uploadBytes(imageRef, imageUpload).then(() => {
        alert("Image Uploaded");
      })
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={(event) => {setImageUpload(event.target.files[0])}}>
        <Text style={{color: '#ff0000'}}>Some text here</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={uploadImage}>
        <Text style={{color: '#ff0000'}}>Some text here</Text>
      </TouchableOpacity>
      {/* <Button onPress={(event) => {setImageUpload(event.target.files[0])}}/>
      <Button onPress={uploadImage} title="Upload Image"/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
