import React, { useState } from 'react';
import { ScrollView,StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';

const SaidaProd = ({ navigation }) => {



  return (
    <View style={styles.container}>

 

      <ScrollView style={styles.scrollView}>
      <Text style={styles.text}>Ultimas Saidas : </Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>
      <Text style={styles.input}>20/05/2028 {'\n'}{'\n'}Pessoa X - 30 unidades</Text>


  </ScrollView>
   
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

export default SaidaProd;
