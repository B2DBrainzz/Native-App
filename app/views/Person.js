import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Upload from './Upload';

const Person = ({navigation, route}) => {
    const title = route.params.title
    const gender = route.params.gender
    const colors = gender === 'boy'? {
        photos: '#2296F3',
        videos: 'blue',
        upload: '#0373FB'
    } : {
        photos:  '#ED537A',
        videos: 'grey',
        upload: 'purple'
    }
    const [ current, setCurrent ] = React.useState('photos')
    return(
        <View style={styles.container}>
        <View style={styles.bar}>
            <TouchableOpacity style={[styles.box, {backgroundColor: colors.photos}]} onPress={() => setCurrent('photos')}> 
          <Text style={styles.navtext}> Photos </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, {backgroundColor: colors.videos}]} onPress={() => setCurrent('videos')}> 
          <Text style={styles.navtext}> Videos </Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.box, {backgroundColor: colors.upload}]} onPress={() => setCurrent('upload')}> 
          <Text style={styles.navtext}> Upload </Text>
      </TouchableOpacity>
        </View>
        <View>
            {current == 'upload' && < Upload title={title} />}
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bar: {
     flex: 0.1,
     flexDirection: 'row', 
     marginBottom: 50
  },
  navtext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },

  links: {

  },

  box: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  }
})

export default Person