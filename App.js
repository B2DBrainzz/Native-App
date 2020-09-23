import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native'
import { Home } from './app/views/Home'
import Header  from './app/sections/Scroll'
import Logo from './app/sections/Logo'
import Navbar from './app/views/Navbar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

 const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Header} />
        <Stack.Screen name="Navbar" component={Navbar} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App