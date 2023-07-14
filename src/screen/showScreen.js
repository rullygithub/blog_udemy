import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/blogContext';
import Icon from 'react-native-vector-icons/FontAwesome'

const ShowScreen = ({route, navigation}) => {
  const {state} = useContext(Context);

  const id = route.params.id;

  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <View>
      <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('edit', {id})}>
            <Icon name="edit" size={20}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
