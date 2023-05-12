import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';

import { useState } from "react";
import FormInput from '../components/Form-Components/FormInput';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../firebase';
import colors from '../styles/colors';
import { ref, uploadBytes } from 'firebase/storage';

 const ImageUploadScreen = () => {
    const [image, setImage] = useState(null);
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState(null);
    const [itemSize, setItemSize] = useState(null);

    const [uploading, setUploading] = useState(false);

    const storageRef = ref(storage, "images");

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

    // const uploadImage = async () => {
    //   if( image == null ) {
    //     return null;
    //   }

    //   uploadBytes(storageRef, image)
    //     .then((snapshot) => {
    //       console.log('uploaded a file')
    //     })

    //   const response = await fetch(image.uri)
    //   // const blob = await response.blob();

    //   // const filename = image.uri.substring(image.uri.lastIndexOf('/')+1);
    //   //var ref = await storage().ref().child(filename).put(blob);
    //   // const storageRef = storage.ref(`photos/${filename}`);
    //   // const task = storageRef.putFile(image);

    //   await storage
    //   .ref(image)
    //   .putFile(response)

    //   console.log(storage);
    //   console.log(response);
    

    // //   addDoc(col, {
    // //     // Name: {itemName},
    // //     // Price: {itemPrice}, 
    // //     // Size: {itemSize},
    // //     Name: 'shirt',
    // //     Price: '5', 
    // //     Size: 'm',
    // //     Filename: {ref},
    // // })
      
    //   try {
    //     await task;
    //     Alert.Alert(
    //       'Photo uploaded..!'
    //     );
    //     setImage(null);
    //     setItemName(null);
    //     setItemPrice(null);
    //     setItemSize(null);
        
    //   }catch (e) {
    //     console.log(e)
    //   }
    //   };

    const uploadImage = async () => {
      const { uri } = image;
    
      const filename = uri.substring(uri.lastIndexOf('/') + 1);
    
     const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    
      setUploading(true);
     
      const task = storageRef
        .ref(filename)
        .putFile(uploadUri);

      try {
        await task;
      } catch (e) {
        console.error(e);
      }
    
      setUploading(false);
    
      Alert.alert(
        'Photo uploaded!',  
        'Your photo has been uploaded to Firebase Cloud Storage!'
      );
     
      setImage(null);
    };
    

      return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>
            Item Application:
          </Text>
          <FormInput
            fn="Name"
          />
          <FormInput
            fn="Price"
          />
          <TouchableOpacity style={styles.uploadButton} onPress={() => pickImage()}>
            <Text style={styles.buttonText}>Choose Image</Text>
          </TouchableOpacity>
          <View style={styles.imageConatiner}>
            {image && <Image source={{uri: image.uri}} style={{width: 300, height: 300}}/>}
            <TouchableOpacity style={styles.selectButton} onPress={() => uploadImage()}>
              <Text style={styles.buttonText}>
                Upload Item
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
     }
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.lightGrey,
        justifyContent: 'center',
        paddingHorizontal: '10%',
      },
      selectButton: {
        height: 35,
        width: '100%',
        marginVertical: '5%',
        backgroundColor: colors.electric,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      },
      text: {
        marginVertical: 20,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.slate,
      },
      buttonText: {
        fontWeight: 600,
        color: colors.lightGrey,
      },
      imageConatiner: {
        alignItems: 'center',
        marginVertical: '5%',

      },
      uploadButton: {
        height: 35,
        width: '100%',
        marginVertical: '5%',
        backgroundColor: colors.lightAccentGrey,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
      }
});
export default ImageUploadScreen;
