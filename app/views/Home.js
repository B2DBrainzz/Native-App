import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export class Home extends React.Component {
    constructor () {
        super();
        this.state = {
            counter: 0
        }
    }

    incrementCount = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrementCount = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.red}>Counter: {this.state.counter} </Text>
                <View style={styles.beside}>
                    <View style={styles.btn}>
                  <Button title="+" color= "green" onPress={this.incrementCount} /> 
                  </View>
                  <View style={styles.btn}>
                  <Button title="-" color="red" onPress={this.decrementCount} />  
                  </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    red: {
      color: 'purple',
      fontWeight: 'bold',
      fontSize: 50
    },
    beside: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    btn: {
        marginRight: 10,
        fontSize: 50,
        width: 40,
        borderRadius: 15
    }
  });
  