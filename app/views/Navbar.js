import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Navbar = () => {
    //const [value, onChangeText] = React.useState('Useless Placeholder');
  
    return (
        <View style={styles.container}>
        <View style={styles.navrow}>
      <TouchableOpacity> 
          <Text style={styles.navtext}> First Item </Text>
      </TouchableOpacity>
      <TouchableOpacity> 
          <Text style={styles.navtext}> Second Item </Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navrow: {
        flexDirection: 'row',
        flex: 2
    },

    navtext: {

    }
})
  
export default Navbar

