import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screens/login';
import RegistrationScreen from '../../screens/registrationscreen';
import AdotanteRegistrationScreen from '../../screens/adotante/cadastroAdotante';
import AbrigoRegistrationScreen from '../../screens/abrigos/cadastroAbrigo';
import BuscaAnimais from '../../screens/buscaAnimais';
import CadastroUserScreen from '../../screens/CadastroUserScreen';
import CadastroAnimal from '../../screens/abrigos/CadastroAnimal';

const Stack = createStackNavigator();

const App = () => {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="AdotanteRegistration" component={AdotanteRegistrationScreen} />
        <Stack.Screen name="AbrigoRegistration" component={AbrigoRegistrationScreen} />
        <Stack.Screen name="BuscaAnimais" component={BuscaAnimais} />
        <Stack.Screen name="CadastroUser" component={CadastroUserScreen} />
        <Stack.Screen name="CadastroAnimal" component={CadastroAnimal} />
      </Stack.Navigator>
  );
};

export default App;
