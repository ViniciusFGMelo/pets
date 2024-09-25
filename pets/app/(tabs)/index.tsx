import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login';
import RegistrationScreen from '../../screens/cadastroScreen';
import AdotanteRegistrationScreen from '../../screens/adotante/cadastroAdotante';
import AbrigoRegistrationScreen from '../../screens/abrigos/cadastroAbrigo';
import BuscaAnimais from '../../screens/buscaAnimaisAbrigo';
import InfoAnimal from '../../screens/infoAnimal';
import CadastroAnimal from '../../screens/abrigos/cadastroAnimal';
import EdicaoAnimal from '../../screens/abrigos/edicaoAnimal';

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="AdotanteRegistration" component={AdotanteRegistrationScreen} />
        <Stack.Screen name="AbrigoRegistration" component={AbrigoRegistrationScreen} />
        <Stack.Screen name="BuscaAnimais" component={BuscaAnimais} />
        <Stack.Screen name="InfoAnimal" component={InfoAnimal} />
        <Stack.Screen name="CadastroAnimal" component={CadastroAnimal} />
        <Stack.Screen name="EdicaoAnimal" component={EdicaoAnimal} />
      </Stack.Navigator>
  );
};

export default App;
