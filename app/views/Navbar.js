import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
//import {Button, Icon} from 'native-base';
const Navbar = ({navigation, route}) => {
    //const [value, onChangeText] = React.useState('Useless Placeholder');
    const params = route.params
    const goTo = title => {
        navigation.navigate('Person', {title: title})
    }
    return (
        <View style={styles.container}>
            <View style={styles.board}>
            <Text style={styles.greeting}>Welcome {params.name}</Text>
            <Text style={styles.logout} onPress={() => navigation.navigate('Home')}>Logout</Text>
            </View>
            
        <View style={styles.navrow}>
      <TouchableOpacity style={styles.box} onPress={() => goTo('Desola')}> 
          <Text style={styles.navtext}> Desola </Text>
          
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => goTo('Demilade')}> 
          <Text style={styles.navtext}> Demilade </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.navrow}>
      <TouchableOpacity style={styles.box} onPress={() => goTo('Demola')}> 
          <Text style={styles.navtext}> Demola </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box} onPress={() => goTo('Deja')}> 
          <Text style={styles.navtext}> Deja </Text>
      </TouchableOpacity>
      </View>
      <View style={styles.navrow}>
      <TouchableOpacity style={styles.box}> 
          <Text style={styles.navtext}> Desire </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}> 
          <Text style={styles.navtext}> Debola </Text>
      </TouchableOpacity>
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    board: {
      backgroundColor: 'orange',
      padding: 10,
      flexDirection: 'row',
      flex: 0.5,
      alignItems: 'center'
    },

    logout: {
      color: 'white',
      textAlign: 'right',
      marginRight: 10,
      flex: 1,
      fontWeight: 'bold',
      fontSize: 20
    },

    container: {
        flex: 1,
        backgroundColor: '#0E5ACC',
        marginTop:30
    },
    navrow: {
        flexDirection: 'row',
        flex: 2,
    },

    navtext: {
       color: 'white',
       fontSize: 20
    },

    box: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        alignItems: "center",
        justifyContent: "center"
    },

    greeting: {
        textAlign: "left",
        color: "blue",
        paddingLeft: 10,
        flex: 2,
        fontWeight: 'bold',
        fontSize: 20
        //marginRight: 50
    }

})
  
export default Navbar

