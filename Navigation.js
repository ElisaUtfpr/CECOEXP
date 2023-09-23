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
      <Stack.Navigator initialRouteName="DetalhesProduto">
     {/* </Stack.Navigator> <Stack.Navigator initialRouteName="Home"> */}

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="AdicaoInsumos" component={AdicaoInsumos} />
        <Stack.Screen name="MenuInsumos" component={MenuInsumos} />
        <Stack.Screen name="RetiradaInsumos" component={RetiradaInsumos} />
        <Stack.Screen name="ListaInsumos" component={ListaInsumos} />
        <Stack.Screen name="ProductCard" component={ProductCard} />
        <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
        <Stack.Screen name="SaidaProd" component={SaidaProd} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
