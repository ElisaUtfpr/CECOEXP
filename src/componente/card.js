import {
  StyleSheet,
  View,
  Text,
  TextInput
  
} from 'react-native';
import React, {useState} from 'react';



export default function Card(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.t1titulo}> {props.titulo} </Text>
      <TextInput
          value={props.titulo}
          style={styles.input}
      />
    </View>
    

  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  
    container: {
        height: 200,
        width: 400,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily:'serif' ,
    
      },
  
}); 
