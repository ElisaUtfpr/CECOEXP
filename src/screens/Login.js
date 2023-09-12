// Login.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const Login = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CECOEXP</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCapitalize="none"
        autoCompleteType="password"
        autoCorrect={false}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("BemVindo"); }}>
        <Text style={styles.buttonText}>CONFIRMAR</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("SignUp"); }}>
          <Text style={styles.signupLink}>Cadastrar</Text>
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
    justifyContent: 'center',
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
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
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: 220,
    borderRadius: 30,
  },

  buttonText: {
    color: 'black',
    fontSize: 19,
    fontWeight: 'bold',
  },

  signupContainer: {
    flexDirection: 'row',
    marginTop: 50,
  },

  signupText: {
    color: 'white',
    fontSize: 20,
  },

  signupLink: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default Login;
