import React from 'react';
import { StyleSheet, View, Text , TextInput,TouchableOpacity} from 'react-native';

const RetiradaInsumos = () => {
 
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Nome: </Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.text}>Quantidade: </Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
      />
 

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Retirar Produto</Text>
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
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: 220,
    borderRadius: 30,
    marginLeft: 95 ,

  },

  buttonText: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },

});

export default RetiradaInsumos;
