import React from 'react';
import {SafeAreaView, StyleSheet, Button, Alert, View, Text} from 'react-native';

const App = () => {
  return (    
      <SafeAreaView style={styles.screen}>
        <View style={styles.box}>
          <Button
            title="Pick an Image"
            onPress={() => {
              Alert.alert('Hello', 'You Pressed button', [{title: 'OK'}]);
            }}
          />
          <Text style={styles.text}>using https://github.com/react-native-community/react-native-image-picker</Text>
        </View>
        <View style={styles.box}>
          <Button
            title="Pick Multiple Images"
            onPress={() => {
              Alert.alert('Hello', 'You Pressed button', [{title: 'OK'}]);
            }}
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
