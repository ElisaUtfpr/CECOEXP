import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet , Pressable ,   Modal,
  TouchableOpacity,
  ScrollView,
 } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getDatabase, ref, query, orderByChild, equalTo, get } from 'firebase/database';

const DetalhesProduto = () => {
  const route = useRoute();
  const { productId, estoque, validade , recebimento , fornecedor} = route.params;
  const { produto } = route.params;
  const [ultimasRetiradas, setUltimasRetiradas] = useState([]);

  const [showAllRetiradas, setShowAllRetiradas] = useState(false);

  
  useEffect(() => {
    const buscarUltimasRetiradas = async () => {
      try {
        const database = getDatabase();
        const retiradasRef = ref(database, 'retiradas');

        const queryUltimasRetiradas = query(
          retiradasRef,
          orderByChild('produto'),
          equalTo(produto)
        );
        const snapshot = await get(queryUltimasRetiradas);

        if (snapshot.exists()) {
          const retiradas = [];
          snapshot.forEach((childSnapshot) => {
            retiradas.push(childSnapshot.val());
          });
          setUltimasRetiradas(retiradas);
        } else {
          console.log('Nenhuma retirada encontrada para este produto.');
        }
      } catch (error) {
        console.error('Erro ao buscar as últimas retiradas:', error);
      }
    };

    buscarUltimasRetiradas();
  }, [produto]);

  const toggleShowAllRetiradas = () => {
    setShowAllRetiradas(!showAllRetiradas);
  };


  return (
    <View style={styles.container}>


      <View style={styles.detailContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>{produto}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Estoque:</Text>
        <Text style={styles.value}>{estoque}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Validade:</Text>
        <Text style={styles.value}>{validade}</Text>
      </View>  
      
       <View style={styles.detailContainer}>
        <Text style={styles.label}>Data do recebimento :</Text>
        <Text style={styles.value}>{recebimento}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Fornecedor :</Text>
        <Text style={styles.value}>{fornecedor}</Text>
      </View>

        <Text style={styles.label}>Últimas Retiradas:</Text>
        <View style={styles.value}>

        {ultimasRetiradas.slice(0, 1).map((retirada, index) => (
          <View key={index}>
            <Text>Data: {retirada.data}</Text>
            <Text>Usuário: {retirada.usuario}</Text>
            <Text>Quantidade: {retirada.quantidade}</Text>
          </View>
        ))}
        {ultimasRetiradas.length > 1 && (
          <TouchableOpacity style={styles.button} onPress={toggleShowAllRetiradas}>
            <Text style={styles.buttonText}>VER MAIS</Text>
          </TouchableOpacity>
        )}
      </View>

      <Modal visible={showAllRetiradas} transparent={true}animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            {ultimasRetiradas.map((retirada, index) => (
              <View key={index} style={styles.retiradaContainer}>
                <Text>Data: {retirada.data}</Text>
                <Text>Usuário: {retirada.usuario}</Text>
                <Text>Quantidade: {retirada.quantidade}</Text>
                <Text>{'\n'}{'\n'}</Text>
              </View>
            ))}
            <TouchableOpacity onPress={toggleShowAllRetiradas}>
              <Text style={styles.fecharModal}>FECHAR</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>


  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7ED957',
    padding: 20,
  },
   modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    maxHeight: '80%',
    width: '80%',
  },

  fecharModal: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'blue',
    fontSize: 16,
  },
  label: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    marginLeft:50 ,
  }, 

  value: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    marginLeft: 40 ,

  },  
    input2: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    marginLeft: 40 ,

  },
  button: {
    backgroundColor: '#7ED957',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: 160,
    borderRadius: 30,
    marginLeft: 60 ,

    
},

buttonText: {
color: 'black',
fontSize: 13,
fontWeight: 'bold',
},
});

export default DetalhesProduto;
