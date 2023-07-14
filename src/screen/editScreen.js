import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState, useContext} from 'react';
import {Context} from '../context/blogContext';
import BlogForm from '../component/blogForm';

const EditScreen = ({navigation, route}) => {
  const id = route.params.id;
  const {state, editBlog} = useContext(Context);
  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <BlogForm
        initialValues={{title: blogPost.title, content: blogPost.content}}
        onSubmit={(title, content) => {
          editBlog(id, title, content, () => navigation.pop());
        }}
      />
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
