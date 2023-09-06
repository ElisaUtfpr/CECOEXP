import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importe o ícone FontAwesome (você pode escolher outro ícone se preferir)

const MenuInsumos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ListaInsumos")}>
        <Icon name="file" size={50} color="black" />
        <Text style={styles.buttonText}>Lista de Insumos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AdicaoInsumos")}>
        <Icon name="plus" size={50} color="black" />
        <Text style={styles.buttonText}>Adição de Insumo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("RetiradaInsumos")}>
        <Icon name="minus" size={50} color="black" />
        <Text style={styles.buttonText}>Retirada de Insumo</Text>
      </TouchableOpacity>
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

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default MenuInsumos;
