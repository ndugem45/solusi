/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  useState,
  useEffect,
} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './Screens/HomeScreen';
import {DetailScreen} from './Screens/DetailScreen';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{headerShown:false }}/>
      <Stack.Screen 
        name="Detail" 
        component={DetailScreen}
        options={{
          title:'Berita',
          headerStyle: {
            backgroundColor: '#0093DD',
          },
          headerTintColor: '#fff',
         }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNav></StackNav>
    </NavigationContainer>
  );
}
