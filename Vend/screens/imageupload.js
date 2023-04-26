import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes } from'firebase/storage';
import { v4 } from "uuid";
import * as ImagePicker from 'expo-image-picker';

export default function App() {

  const Uploadscreen = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
      let result = await ImagePicker.laungImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowEditing:true,
        aspect: [4,3],
        quality:1,
      });

      const source = {uri: result.uri};
      console.log(source);
      setImage(source)
    };

    const uploadImage = async () => {
      setUploading(true);
      const response = await fetch(image.uri)
      const blob = await response.blob();
      const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
      var ref = firebase.storage().ref().child(filename).put(blob);
      
      try {
        await ref;
      }catch (e) {
        console.log(e)
      }
      setUploading(false);
      Alert.Alert(
        'PHoto uploaded..!'
      );
      setImage(null);
      }
    }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
