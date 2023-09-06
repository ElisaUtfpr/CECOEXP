// SignUp.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const SignUp = () => {
  return (
    <View style={{ backgroundColor: '#7ED957', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.t2Texto}>Criar uma nova conta </Text>

      <TextInput
        style={styles.input}
        containerStyle={{ marginTop: 15 }}
        placeholder="Nome"
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        containerStyle={{ marginTop: 15 }}
        placeholder="Sobrenome"
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        containerStyle={{ marginTop: 15 }}
        placeholder="Senha"
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        containerStyle={{ marginTop: 15 }}
        placeholder="Repita a senha "
        autoCapitalize="none"
        autoCompleteType="off"
        autoCorrect={false}
      />

      <Text color="white" size="md" >Já tem uma conta ? </Text>
      <TouchableOpacity onPress={() => { navigation.navigate("Register"); }}>
        <Text 
          size="md"
          fontWeight="bold"
          style={{ marginLeft: 5, }}>
          Entrar
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  t2Texto: {
    color: 'white',
    fontSize: 19,
    fontWeight: '800',
    fontFamily: 'serif',
  },

  input: {
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 55,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    fontSize: 19,
  },
});

export default SignUp;
