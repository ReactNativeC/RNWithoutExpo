import React from 'react';
import {SafeAreaView, StyleSheet, Button, Alert, View, Text, Image} from 'react-native';

import ImagePicker from 'react-native-image-picker';

const App = () => {  
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

  const pickMultipleImageHandler = () => {

  }
  return (    
      <SafeAreaView style={styles.screen}>
        <View style={styles.box}>
          <Button
            title="Pick an Image"
            onPress={pickImageHandler}            
          />
          <Text style={styles.text}>using https://github.com/react-native-community/react-native-image-picker</Text>
        </View>
        <View style={styles.box}>
          <Button
            title="Pick Multiple Images"
            onPress={pickMultipleImageHandler}
          />
          <Text style={styles.text}>using https://github.com/ivpusic/react-native-image-crop-picker</Text>
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
    fontSize: 20, 
    color: 'gray',
    marginHorizontal: 10,
  }

})

export default App;
