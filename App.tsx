import React from 'react';
import {StyleSheet} from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/homeScreen';
import {Provider} from './src/context/blogContext';
import ShowScreen from './src/screen/showScreen';
import AddScreen from './src/screen/addScreen';
import EditScreen from './src/screen/editScreen';
// Navigation

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="homescreen">
          <Stack.Screen name="homescreen" component={HomeScreen} />
          <Stack.Screen name="showscreen" component={ShowScreen} />
          <Stack.Screen name="addscreen" component={AddScreen} />
          <Stack.Screen name="edit" component={EditScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
