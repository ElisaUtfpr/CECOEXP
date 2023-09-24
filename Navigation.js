import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SignUp from './src/screens/SignUp';
import Login from './src/screens/Login';
import BemVindo from './src/screens/BemVindo';
import AdicaoInsumos from './src/screens/AdicaoInsumos';
import MenuInsumos from './src/screens/MenuInsumos';
import RetiradaInsumos from './src/screens/RetiradaInsumos';
import ListaInsumos from './src/screens/ListaInsumos';
import ProductCard from './src/componente/ProductCard';
import DetalhesProduto from './src/screens/DetalhesProduto';
import SaidaProd from './src/screens/SaidaProd';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Bem Vindo" component={BemVindo} />
        <Stack.Screen name="Adicao de Insumos" component={AdicaoInsumos} />
        <Stack.Screen name="CECOEXP" component={MenuInsumos} />
        <Stack.Screen name="Retirada de Insumos" component={RetiradaInsumos} />
        <Stack.Screen name="Lista de Insumos" component={ListaInsumos} />
        <Stack.Screen name="ProductCard" component={ProductCard} />
        <Stack.Screen name="Detalhes do Produto" component={DetalhesProduto} />
        <Stack.Screen name="Saida de Produtos" component={SaidaProd} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
