// SignUp.js

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp, getApps } from 'firebase/app';

import React, { useState } from 'react';
import {Alert ,StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';


const firebaseConfig = {
  apiKey: "AIzaSyBtiQAMCRVXq0D4QommSpefulXNlCQdoS0",
  authDomain: "reactfirebase-1f574.firebaseapp.com",
  projectId: "reactfirebase-1f574",
  storageBucket: "reactfirebase-1f574.appspot.com",
  messagingSenderId: "196219392111",
  appId: "1:196219392111:web:74153bde0ccde2905a3d9a"
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}


const SignUp = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Erro','As senhas não coincidem.');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Erro','A senha deve ter pelo menos 6 caracteres.');
      return;
    }



    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          Alert.alert('Sucesso','Cadastro concluído com sucesso!');
          setEmail('');
          setPassword('');
          setConfirmPassword('');

          navigation.navigate("Login");

        })
        .catch((error) => {
          console.error(error.message);
          Alert.alert('Erro','Ocorreu um erro durante o cadastro. Verifique as informações fornecidas.');
        });
    } catch (error) {
      console.error(error);
      Alert.alert('Erro','Ocorreu um erro inesperado.');
    }
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.t2Texto}>Criar uma nova conta</Text>


      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Repita a senha"
          autoCapitalize="none"
          autoCompleteType="password"
          autoCorrect={false}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
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