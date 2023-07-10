import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useContext} from 'react';
import BlogContext from '../context/blogContext';

const HomeScreen = () => {
  const {data, addBlogPost} = useContext(BlogContext);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
