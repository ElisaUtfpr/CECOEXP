import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const MenuInsumos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Lista de Insumos")}>
        <Icon name="file" size={50} color="black" />
        <Text style={styles.buttonText}>Lista de Insumos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Adicao de Insumos")}>
        <Icon name="plus" size={50} color="black" />
        <Text style={styles.buttonText}>Adição de Insumo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Retirada de Insumos")}>
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
    height: 140,
    width: 270, 
  },

  buttonText: {
    color: 'black',
    fontSize: 20,
    marginLeft:25,
  },
});

export default MenuInsumos;
