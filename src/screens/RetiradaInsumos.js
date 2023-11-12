import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  Alert,
} from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { serverTimestamp  , getDatabase, ref, push, set, child, get } from 'firebase/database';

const RetiradaInsumos = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [user, setUser] = useState(null);
  const [productList, setProductList] = useState([]);

  const auth = getAuth();
  const database = getDatabase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        // Se o usuário estiver autenticado, busca a lista de produtos no banco
        fetchProductList();
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const fetchProductList = async () => {
    try {
      const produtosRef = ref(database, 'insumos');
      const snapshot = await get(produtosRef);

      if (snapshot.exists()) {
        // Se existirem produtos, atualiza a lista de produtos
        const produtos = snapshot.val();
        const productNames = Object.keys(produtos).map((key) => produtos[key].nome);
        setProductList(productNames);
      }
    } catch (error) {
      console.error('Erro ao buscar a lista de produtos:', error);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
    toggleModal();
  };

  const handleRetirarProduto = () => {
    if (!selectedProduct || !quantity) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha todos os campos para retirar o produto.'
      );
      return;
    }

    if (!user) {
      Alert.alert('Erro', 'Usuário não autenticado.');
      return;
    }

    const retiradasRef = ref(database, 'retiradas');

    const novaRetiradaRef = push(retiradasRef);
    set(novaRetiradaRef, {
      produto: selectedProduct,
      quantidade: parseInt(quantity, 10), // Convert to integer
      usuario: user.email || 'emaildesconhecido@example.com', // Email do usuário
      data: serverTimestamp(), // Data da retirada
    });

    setQuantity('');
    setSelectedProduct('');
    toggleModal();

    Alert.alert('Sucesso', 'Retirada registrada com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nome: </Text>
      <TouchableOpacity style={styles.input} onPress={toggleModal}>
        <Text>{selectedProduct || 'Selecione um Produto'}</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Quantidade: </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={(text) => setQuantity(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleRetirarProduto}>
        <Text style={styles.buttonText}>Retirar Produto</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={productList}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.productItem}
                  onPress={() => selectProduct(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    marginLeft: 50,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    marginLeft: 40,
  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: 220,
    borderRadius: 30,
    marginLeft: 95,
  },
  buttonText: {
    color: 'black',
    fontSize: 19,
    fontWeight: '800',
    fontFamily: 'serif',

  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  productItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default RetiradaInsumos;
