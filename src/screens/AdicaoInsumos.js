import { getDatabase, ref, push, set } from 'firebase/database';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const AdicaoInsumos = () => {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [validade, setValidade] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [recebimento, setRecebimento] = useState('');

  const handleAdicionarInsumo = () => {
    if (!produto || !quantidade || !validade || !fornecedor || !recebimento) {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos para adicionar o insumo.');
      return;
    }

    const database = getDatabase();
    const insumosRef = ref(database, 'insumos');

    const novoInsumoRef = push(insumosRef);
    set(novoInsumoRef, {
      produto,
      quantidade,
      validade,
      fornecedor,
      recebimento,
    });

    setProduto('');
    setQuantidade('');
    setValidade('');
    setFornecedor('');
    setRecebimento('');

    Alert.alert('Sucesso', 'Insumo adicionado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: </Text>
      <TextInput
        style={styles.input}
        value={produto}
        onChangeText={setProduto}
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
      <Text style={styles.text}>Data do recebimento: </Text>
      <TextInput
        style={styles.input}
        value={recebimento}
        onChangeText={setRecebimento}
      />
      <TouchableOpacity style={styles.button} onPress={handleAdicionarInsumo}>
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
