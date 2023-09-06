import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ListaInsumos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Lista de Insumos</Text>
      {/* Adicione o conteúdo da lista de insumos aqui */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ED957',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ListaInsumos;
