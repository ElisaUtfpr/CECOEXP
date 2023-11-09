import React, { useState } from 'react';
import { Alert ,StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';

const AdicaoInsumos = () => {

  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [validade, setValidade] = useState('');
  const [fornecedor, setFornecedor] = useState('');

  const cadastrar = async () => {
    try{

    }
    catch (error) {
      console.error(error);
      Alert.alert('Erro inesperado', 'Ocorreu um erro inesperado durante o login.');

    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Nome: </Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.text}>Quantidade: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <Text style={styles.text}>Validade: </Text>
      <TextInput
        style={styles.input}
        value={validade}
        onChangeText={setValidade}
      />

      <Text style={styles.text}>Fornecedor: </Text>
      <TextInput
        style={styles.input}
        value={fornecedor}
        onChangeText={setFornecedor}
      />


      <TouchableOpacity style={styles.button} onPress={cadastrar}>
        <Text style={styles.buttonText}>Adicionar Produto</Text>
      </TouchableOpacity>
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
    marginLeft: 50,
  },

  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    marginLeft: 40,

  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: 220,
    borderRadius: 30,
    marginLeft: 95,

  },

  buttonText: {
    color: 'black',
    fontSize: 19,
    fontWeight: '800',
    fontFamily: 'serif',
  },

});

export default AdicaoInsumos;
