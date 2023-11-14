import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductCard = ({ produtoNome, estoque, dataUso }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.produtoNome}>{produtoNome}</Text>
      <Text style={styles.texto}>Estoque: {estoque}</Text>
      <Text style={styles.texto}>Último Uso: {dataUso}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    width: 410,
  },
  produtoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ProductCard;
