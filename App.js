import React from 'react';
import {SafeAreaView, Button, Alert} from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Button
          title="Pick an Image"
          onPress={() => {
            Alert.alert('Hello', 'You Pressed button', [{title: 'OK'}]);
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
