import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import ProfilePicture from '../components/ProfilePicture';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function NewTweetScreen() {
  const [tweet, setTweet] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const onPostTweet = () => {
    console.log(tweet)
    console.log(imageUrl)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name='close' size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture image='https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80' />
        <View style={styles.inputsContainer}>
          <TextInput
            value={tweet}
            multiline={true}
            numberOfLines={3}
            style={styles.tweetInput}
            placeholder="What's happening?"
            onChangeText={setTweet}
          />
          <TextInput value={imageUrl}
            style={styles.imageInput}
            placeholder="Image url {optional}"
            onChangeText={setImageUrl}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    paddingTop: 10
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
    textAlignVertical: "top"
  },
  imageInput: {

  }
});
