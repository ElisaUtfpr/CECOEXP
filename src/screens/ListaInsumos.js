import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { getDatabase, ref, onValue } from 'firebase/database';
import ProductCard from '../componente/ProductCard';
import { FontAwesome } from '@expo/vector-icons'; // Importe o ícone necessário (FontAwesome, neste exemplo)
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation

const ListaInsumos = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const database = getDatabase();
    const insumosRef = ref(database, 'insumos');


    onValue(insumosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const produtosArray = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
        setProducts(produtosArray);
      }
    });
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.produto.toLowerCase().includes(searchText.toLowerCase()) ||
      product.quantidade.toLowerCase().includes(searchText.toLowerCase()) ||
      product.validade.toLowerCase().includes(searchText.toLowerCase())
  );




  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
      <FontAwesome name="search" size={20} color="black" style={styles.searchIcon} />

        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar produtos"
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        {filteredProducts.map((product) => (
          <TouchableOpacity key={product.id} style={styles.card} onPress={() =>  navigation.navigate('Detalhes do Produto' , {
            productId: product.id, // Passando o ID do produto como parâmetro
            // Outros dados que você deseja passar para a tela de detalhes
            produto: product.produto,
            estoque: product.quantidade,
            validade: product.validade,
            recebimento: product.recebimento,
            fornecedor: product.fornecedor,
          }
          ) }>
          <ProductCard
              produto={product.produto}
              estoque={product.quantidade}
              validade={product.validade}
            />
          </TouchableOpacity>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 45,
    marginRight: 45,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7ED957',
  },
  scrollView: {
    width: '100%',
  },
});

export default ListaInsumos;
