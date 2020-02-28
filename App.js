import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Button, Alert, View, Text, Image} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const App = () => {  
  const [pickedImageUri, setPickedImageUri] = useState();
  const pickImageHandler = () => {
    // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    ImagePicker.showImagePicker(options, (response) => {
      //console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        
      console.log(source);   
      }
    });
  }

  const launchCameraHandler = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      if(response.didCancel) {
        console.log('User cancelled');
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error)
      } else {
        const imageUri = response.uri;
        console.log(imageUri);
        setPickedImageUri(imageUri);
      }
    })
  }
  const LaunchImageLibraryHandler = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if(response.didCancel) {
        console.log('User cancelled');
      } else if (response.error) {
        console.log('ImagePicker error: ', response.error)
      } else {
        const imageUri = response.uri;
        console.log(imageUri);
        setPickedImageUri(imageUri);
      }
    })
  }

  const pickMultipleImageHandler = () => {
  }
  return (    
      <SafeAreaView style={styles.screen}>
        <View style={styles.box}>
          <Button
            title="Pick an Image"
            onPress={pickImageHandler}            
          />
          <View style={{marginTop:10}}>
          <Button
            title="Launch Camera"
            onPress={launchCameraHandler}            
          />
          </View>
          <View style={{marginTop: 10}}>
           <Button
            title="Launch Image Library"
            onPress={LaunchImageLibraryHandler}            
          />
          </View>
          <Text style={styles.text}>Using https://github.com/react-native-community/react-native-image-picker</Text>
          <Image source={{uri: pickedImageUri}}  style={{width: 100, height: 100}}/>
        </View>
        <View style={styles.box}>
          <Button
            title="Pick Multiple Images"
            onPress={pickMultipleImageHandler}
          />
          <Text style={styles.text}>Using https://github.com/ivpusic/react-native-image-crop-picker</Text>
        </View>
      </SafeAreaView>    
  );  
};

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',    
    marginVertical: 10,          
  }, 
  text: {    
    fontSize: 16, 
    color: 'gray',
    marginHorizontal: 10,
    marginTop:5
  }
})

export default App;
