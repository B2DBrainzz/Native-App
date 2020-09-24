import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native'
import { Home } from './app/views/Home'
import Person from './app/views/Person'
import Header  from './app/sections/Scroll'
import Logo from './app/sections/Logo'
import Navbar from './app/views/Navbar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

 const App = () => {
  return (
    <NavigationContainer >
<Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >
        <Stack.Screen name="Home" component={Header} options={{ headerShown: false }} />
        <Stack.Screen name="Navbar" component={Navbar} options={{ headerShown: false }}/>
        <Stack.Screen name="Person" component={Person} 
        options={({ route }) => ({ title: route.params.title })} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App