import React, { useState, useEffect } from 'react';
import { TouchableOpacity, TextInput, StyleSheet, View, Text, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import ProductCard from '../componente/ProductCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { getDatabase, ref, onValue } from 'firebase/database';

const ListaInsumos = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState([]);
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
            (product.nome && product.nome.toLowerCase().includes(searchText.toLowerCase()))
          )
          .map((product) => (
            <TouchableOpacity
              key={product.id}
              onPress={() => {
                navigation.navigate('Detalhes do Produto', {
                  produtoNome: product.nome || 'Sem nome',
                  estoque: 0, // Coloque a lógica correta para o estoque
                  dataUso: 'Sem data',
                });
              }}
            >
              <ProductCard style={styles.card}
                key={product.id}
                produtoNome={product.nome || 'Sem nome'}
                estoque={0} // Coloque a lógica correta para o estoque
                dataUso={'Sem data'}
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
   card: {
    marginRight: 1000,
    
  },
});

export default ListaInsumos;
