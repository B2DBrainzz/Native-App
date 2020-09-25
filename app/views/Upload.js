import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, Picker, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [format, setFormat] = useState('')

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{textAlign: 'left', paddingTop: 40 }}>Type of Upload</Text>
        <View style={{borderWidth: 2, borderColor: 'grey', borderRadius: 10, height: 50, width: '70%', margin: 20, marginTop: 10 }}>
        <Picker
  selectedValue={format}
  style={{ }}
  onValueChange={(itemValue, itemIndex) => setFormat(itemValue)}>
  <Picker.Item label="Video" value="video" />
  <Picker.Item label="Photo" value="photo" />
</Picker>
</View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }}
       style={{ width: 200, height: 200 }}
       options={{mediaTypes: ImagePicker.MediaTypeOptions.all}} />}
    </View>
  );
}

export default Upload