import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const RetiradaInsumos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Retirada de Insumos</Text>
      {/* Adicione os campos de retirada de insumos aqui */}
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

export default RetiradaInsumos;
