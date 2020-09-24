import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const Person = ({navigation, route}) => {
    const title = route.params.title
    return(
        <View>
            <Text>{title}</Text>
        </View>
    )
}

export default Person