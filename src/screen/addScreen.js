import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useContext, useState} from 'react';
import { Context } from '../context/blogContext';

const AddScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {addBlogPost} = useContext(Context);
  return (
    <View>
      <Text>Create Blog Post</Text>
      <View style={{paddingHorizontal: 20, marginVertical: 30}}>
        <Text>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text>Content</Text>
        <TextInput
          style={styles.input}
          value={content}
          onChangeText={text => setContent(text)}
        />
        <View style={styles.button}>
          <Button title="add blog" onPress={() => {
             addBlogPost(title, content, () => {
                navigation.navigate('homescreen')
             }) 
          }}>
            <Text>Add Blog</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
  },
});
