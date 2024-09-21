import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login';
import RegistrationScreen from '../../screens/registrationscreen';
import AdotanteRegistrationScreen from '../../screens/adotante/cadastroAdotante';
import AbrigoRegistrationScreen from '../../screens/abrigos/cadastroAbrigo';
import BuscaAnimais from '../../screens/buscaAnimais';

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="AdotanteRegistration" component={AdotanteRegistrationScreen} />
        <Stack.Screen name="AbrigoRegistration" component={AbrigoRegistrationScreen} />
        <Stack.Screen name="BuscaAnimais" component={BuscaAnimais} />
      </Stack.Navigator>
  );
};

export default App;
