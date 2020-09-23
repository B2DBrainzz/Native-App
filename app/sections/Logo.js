import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Logo() {
  return(
    <Image
    style={styles.topLogo}
    source={require('./images/logo2.jpeg')}
  />
  )
}

const styles = {
    topLogo: {
        flex: 3,
        width: undefined,
        height: undefined,
        marginBottom: 10
      }
}