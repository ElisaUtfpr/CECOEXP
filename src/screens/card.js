import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';



export default function Card(props) {

  return (
    <View style={styles.container}>
      <Text style={styles.t1titulo}> {props.titulo} </Text>

    </View>
    

  );
}

const styles = StyleSheet.create({

    logo: {
        width: 100, // Largura da imagem
        height: 100, // Altura da imagem
        marginBottom: 10, // Espaçamento após a imagem
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
