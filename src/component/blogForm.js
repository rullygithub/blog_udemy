import { StyleSheet, Text, View,TextInput, Button } from 'react-native'
import React, {useState} from 'react'

const BlogForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  
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
          <Button title="save blog" onPress={() => onSubmit(title, content)}>
            <Text>Save Blog</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}


export default BlogForm


const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
    marginBottom: 10,
  },
  button: {
    marginTop: 30,
  },
})