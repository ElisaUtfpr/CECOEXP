import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import Card from './src/card';




export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.t1titulo}> CECOEXP </Text>
      <StatusBar style="auto" />
      <Text style={styles.t1texto}> Controle de estoque de insumos da COEXP - UTFPR  </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Sobre")} style={styles.button}>
        <Text style={styles.t1txtbotao}>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
    

  );
}

const styles = StyleSheet.create({


  t1txtbotao: { 
    color: 'white',
    fontSize: 19 , 
    fontWeight: '800',
    fontFamily: 'serif',

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#7ED957',
    padding: 7,
    borderRadius: 20,
    width: 220,  
    height: 45,  
    borderRadius: 30,
    marginTop: 70,  
  },



  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:'serif' ,

  },

  t1titulo: {
    fontSize: 40 , 
    color: '#7ED957',
    fontWeight: '800',
    fontFamily: 'serif',
  },

  t1texto: { 
    fontSize: 19 , 
    color: 'black',
    margin:40,
    textAlign: 'center',
    marginTop: 200,
  },

 
}); 
