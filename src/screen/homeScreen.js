import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/blogContext';

const HomeScreen = () => {
  const {state, addBlogPost} = useContext(Context);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={state}
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
