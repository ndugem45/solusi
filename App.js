/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './Screens/HomeScreen';

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{headerShown:false }}/>
      {/* <Stack.Screen name="Detai" component={DetailScreen} /> */}
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
