import {StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {Context} from '../context/blogContext';

import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({navigation}) => {
  const {state,deleteBlogPost} = useContext(Context);

  return (
    <View>
      <View style={{marginBottom: 20}}>
      
      <Button title="Add Post" onPress={() => navigation.navigate('addscreen')} style={{borderWidth:1, borderColor:'red', backgroundColor: 'red', width: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
        <Icon name="plus" size={20}/>
      </Button>
      </View>
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('showscreen', {id: item.id})}>
              <View style={styles.boxCard}>
              <Text>{item.title} - {item.id}</Text>
              <View style={styles.actionBtn}>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
              <Icon name="trash" size={20} />
              
              </TouchableOpacity>
              </View>
            </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  boxCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    
  }
});
