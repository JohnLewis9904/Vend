import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';

import { useState } from "react";

import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../firebase';

 const UploadScreen = () => {
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
      };
    

  return (
    <SafeAreaView>
      <View style={styles.blobby}></View>
      <TouchableOpacity style={styles.selectButton} onPress={() => pickImage}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>
      <View style={styles.imageConatiner}>
        <Image source={{uri: image.uri}} style={{width: 300, height: 300}}/>
        <TouchableOpacity style={styles.uploadButton} onPress={() => uploadImage}>
          <Text style={styles.buttonText}>
            Upload Image
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButton: {
    borderRadius: 5,
    width: 150, 
    height: 150,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText: {
    color:'white',
    fontSize:18,
    fontWeight:'bold',
  },
  imageConatiner: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center',
  },
  blobby: {
    backgroundColor: 'purple',
    flex: 1,
  }
});
export default UploadScreen;
