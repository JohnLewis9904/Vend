import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';

import { useState } from "react";

import * as ImagePicker from 'expo-image-picker';
import { firebase, storage } from '../firebase';

 const UploadScreen = () => {
    const [image, setImage] = useState(null);
    const [itemName, setItemName] = useState(null);
    const [itemPrice, setItemPrice] = useState(null);
    const [itemSize, setItemSize] = useState(null);

    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      const source = {uri: result.uri};
      console.log(source);
      setImage(source)
    };

    const uploadImage = async () => {
      if( image == null ) {
        return null;
      }
      setUploading(true);
      const response = await fetch(image.uri)
      const blob = await response.blob();

      const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
      //var ref = await storage().ref().child(filename).put(blob);
      const storageRef = storage.ref(`photos/${filename}`);
      const task = storageRef.putFile(image);

      console.log(filename);
      console.log(storageRef);
      console.log(task);

    //   addDoc(col, {
    //     // Name: {itemName},
    //     // Price: {itemPrice}, 
    //     // Size: {itemSize},
    //     Name: 'shirt',
    //     Price: '5', 
    //     Size: 'm',
    //     Filename: {ref},
    // })
      
      try {
        await task;
        setUploading(false);
        Alert.Alert(
          'Photo uploaded..!'
        );
        setImage(null);
        setItemName(null);
        setItemPrice(null);
        setItemSize(null);
        
      }catch (e) {
        console.log(e)
      }
      };
    

      return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity style={styles.selectButton} onPress={() => pickImage()}>
            <Text style={styles.buttonText}>Pick an Image</Text>
          </TouchableOpacity>
          <View style={styles.imageConatiner}>
            {image && <Image source={{uri: image.uri}} style={{width: 300, height: 300}}/>}
            <TouchableOpacity style={styles.uploadButton} onPress={() => uploadImage()}>
              <Text style={styles.buttonText}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
     }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      selectButton: {
        borderRadius: 5,
        width: 150, 
        height: 100,
        backgroundColor:'blue',
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
      uploadButton: {
        borderRadius: 5,
        width: 150, 
        height: 100,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
      }
});
export default UploadScreen;
