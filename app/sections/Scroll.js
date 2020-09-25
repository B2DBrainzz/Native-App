import React from 'react';
import { View, Text, Image,
     StyleSheet, TextInput, Platform, Button, TouchableOpacity  } from 'react-native';
     import Logo from './Logo'

export class Header extends React.Component {
 constructor() {
   super();
   this.state = {
       isLoggedIn: false,
       email: '',
       password: ''
   }
 } 
 
 toggleUser = () => {
     this.setState({
        isLoggedIn: !this.state.isLoggedIn
     })
     this.props.navigation.navigate('Navbar',{name: this.state.email})
 }

 onChangeText = obj => {
     obj.hasOwnProperty("email")?
    this.setState({
        email: obj.email
     }) : this.setState({
        password: obj.password
     })
}
 render() {
     let display = this.state.isLoggedIn? 'LOGIN' : 'LOGIN'
     return(
        <View style={styles.container}>
        <Logo /> 
        <Text style={styles.login}>La Familie App</Text>
         <View style={styles.buttonView}>
             <TextInput
              style={ styles.input}
              placeholder='Username/Email'
              onChangeText={text => this.onChangeText({email: text})}
              value={this.state.email}
             />
             <TextInput
              style={ styles.input}
              placeholder='Password'
              onChangeText={text => this.onChangeText({password: text})}
              value={this.state.password}
             />
        <TouchableOpacity style={styles.button} onPress={this.toggleUser}>
     <Text style={{fontSize: 30,
        color: 'white', textAlign: 'center'}}>{display}</Text>
        </TouchableOpacity>
        </View>
        </View>
     )
 }
  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
      },
      login: {
        fontSize: 20,
        textAlign: "center",
        color: 'grey'
      },
    top: {
        alignItems: "center",
        width: "80%",
        marginLeft: 33,
        backgroundColor: "#2296F3"
    },


    topLogo: {
      flex: 1,
      width: undefined,
      height: undefined
    },

    buttonView: {
      alignItems: "center",
      flex: 2
    },

    button: {
        backgroundColor: '#006CB5',
        width: '80%',
        padding: 15,
        margin: 10
    },

    input: {
        height: 40,
         width: '80%', 
         borderColor: 'gray',
          borderWidth: 2, 
          paddingLeft:10,
          margin: 10,
          borderRadius: 5
    }
})

export default Header;
