// HomeScreen.js
import { StatusBar } from 'expo-status-bar';
import { View,
         StyleSheet,
         Text, 
         TouchableOpacity,
         Button,
         Pressable 
         } from 'react-native';
import React, {useState} from 'react';

const BemVindo = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.t1titulo}> CECOEXP </Text>
      <StatusBar style="auto" />
      <Text style={styles.t1texto}> Bem Vindo   </Text>

      <Pressable style={styles.button} onPress={() => navigation.navigate('CECOEXP')}>
      <Text style={styles.t1txtbotao}>COMEÇAR</Text>
      </Pressable>

   </View>
  );
};

const styles = StyleSheet.create({

    t1txtbotao: {
        color: 'white',
        fontSize: 19,
        fontWeight: '800',
        fontFamily: 'serif',
      },
    
      button: {
        alignItems: 'center',
        backgroundColor: '#7ED957',
        padding: 7,
        width: 220,
        height: 45,
        borderRadius: 30,
        marginTop: 70,
      },
    


  t1titulo: {
    fontSize: 40,
    color: '#7ED957',
    fontWeight: '800',
    fontFamily: 'serif',
  },

  t1texto: {
    fontSize: 19,
    color: 'black',
    margin: 40,
    textAlign: 'center',
    marginTop: 200,
  },
});

export default BemVindo;
