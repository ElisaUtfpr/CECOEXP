import React, { useState } from 'react';
import { TextInput ,StyleSheet, View, Text , ScrollView,SafeAreaView , StatusBar} from 'react-native';
import ProductCard from '../componente/ProductCard';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const ListaInsumos = () => {
  const [searchText, setSearchText] = useState(''); 

  const products = [
    { id: 1, produtoNome: 'Produto A', estoque: 10, dataUso: '2023-09-15' },
    { id: 2, produtoNome: 'Produto B', estoque: 20, dataUso: '2023-09-14' },
    { id: 3, produtoNome: 'Produto C', estoque: 5, dataUso: '2023-09-16' },
    { id: 4, produtoNome: 'Produto C', estoque: 5, dataUso: '2023-09-16' },
    { id: 5, produtoNome: 'Produto C', estoque: 5, dataUso: '2023-09-16' },
    { id: 6, produtoNome: 'Produto C', estoque: 5, dataUso: '2023-09-16' },
    { id: 7, produtoNome: 'Produto C', estoque: 5, dataUso: '2023-09-16' },
    { id: 9, produtoNome: 'Produto C', estoque: 5, dataUso: '2023-09-16' },
  ];



  return (

    <SafeAreaView style={styles.container}>
    <View style={styles.searchBar}>
      <Icon name="search" size={20} color="#000" />
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar produtos"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
    </View>



    <ScrollView style={styles.scrollView}>
     {products
    .filter((product) =>
      product.produtoNome.toLowerCase().includes(searchText.toLowerCase())
    )
    .map((product) => (
      <ProductCard
        key={product.id}
        produtoNome={product.produtoNome}
        estoque={product.estoque}
        dataUso={product.dataUso}
      />
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
    marginLeft:45,
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

  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ListaInsumos;
