import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const DetalhesProduto = ({ navigation }) => {



  return (
    <View style={styles.container}>

      <Text style={styles.text}>Nome: </Text>
      <Text style={styles.input}>Produto A</Text>

      <Text style={styles.text}>Quantidade: </Text>
      <Text style={styles.input}>30 unidades</Text>

      <Text style={styles.text}>Validade: </Text>
      <Text style={styles.input}>23/02/2028</Text>

      <Text style={styles.text}>Ultimo Recebimento:</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}Empresa X - 30 unidades</Text>

      <Text style={styles.text}>Ultima Saida:</Text>
       <View style={styles.input} >
      <Text>20/05/2023 {'\n'}
      Elisa Capelett - 30 unidades 
      </Text>
      <View style={styles.input} >


      <Pressable style={styles.button} onPress={() => navigation.navigate('SaidaProd')}>
      <Text style={styles.buttonText}>VER TODOS</Text>
      </Pressable>
      </View>
      </View>
    

    
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7ED957',
        justifyContent: 'center',
      },
      text: {
        color: 'white',
        fontSize: 20,
        marginBottom: 10,
        marginLeft:50 ,
      }, 
    
      input: {
        backgroundColor: 'white',
        width: '80%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        marginLeft: 40 ,
    
      },  
        input2: {
        backgroundColor: 'white',
        width: '80%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        marginLeft: 40 ,
    
      },
      button: {
        backgroundColor: '#7ED957',
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: 160,
        borderRadius: 30,
        
  },

  buttonText: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
    });

export default DetalhesProduto;
