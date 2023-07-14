import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useContext, useState} from 'react';
import { Context } from '../context/blogContext';
import BlogForm from '../component/blogForm';


const AddScreen = ({navigation}) => {
  
  const {addBlogPost} = useContext(Context);
  return (
    <View>
      <BlogForm onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('homescreen'))
      }}/>
    </View>
  )

};

export default AddScreen;

const styles = StyleSheet.create({
  
});
