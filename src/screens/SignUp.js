// SignUp.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Login from './Login'; 

const SignUp = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.t2Texto}>Criar uma nova conta</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />

        <TextInput
          style={styles.input}
          placeholder="Repita a senha"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />
      </View>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Já tem uma conta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("Login"); }}>
          <Text style={styles.loginLink}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ED957',
    alignItems: 'center',
    paddingTop: 50,
  },

  t2Texto: {
    color: 'white',
    fontSize: 21,
    fontWeight: '800',
    fontFamily: 'serif',
    marginBottom: 20,
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },

  input: {
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
    height: 55,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    width: 300,
    fontSize: 19,
  },

  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    padding: 7,
    width: 220,
    height: 45,
    borderRadius: 30,
    marginTop: 50,
  },

  buttonText: {
    color: 'black',
    fontSize: 19,
    fontWeight: '800',
    fontFamily: 'serif',

   },

  loginContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },

  loginText: {
    color: 'white',
    fontSize: 20,
  },

  loginLink: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default SignUp;
