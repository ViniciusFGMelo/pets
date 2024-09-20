import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';

const Stack = createStackNavigator();

const LoginScreen = ({navigation}: { navigation: NavigationProp<any> }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'test@email.com' && password === 'test') {
      Alert.alert('Sucesso!', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro!', 'Email ou senha incorretos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pets</Text>
      <Image  source={require('../../assets/images/dog1.png')} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Text style={styles.error}>
        {email === '' || password === '' ? '' : 'Email ou senha incorretos'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <FontAwesomeIcon icon={faPlayCircle} size={20} color="#65558F" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')}>
        <FontAwesomeIcon icon={faUser} size={20} color="#65558F" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Primeiro Acesso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BuscaAnimais')}>
        <FontAwesomeIcon icon={faUser} size={20} color="#65558F" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Buscar Animais</Text>
      </TouchableOpacity>
    </View>
  );
};

const RegistrationScreen = ({navigation}: { navigation: NavigationProp<any> }) => {
  return (
    <View style={styles.registrationContainer}>
      <Text style={styles.title}>Seleção de Perfil</Text>
      <Image source={require('../../assets/images/dog2.png')} style={styles.icon} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdotanteRegistration')}>
        <FontAwesomeIcon icon={faUser} size={20} color="#65558F" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Quero adotar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AbrigoRegistration')}>
        <FontAwesomeIcon icon={faUser} size={20} color="#65558F" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Abrigo</Text>
      </TouchableOpacity>
    </View>
  );
};

const AdotanteRegistrationScreen = ({navigation}: { navigation: NavigationProp<any> }) => {
  const [nome, setNome] = useState('');
  const [nascimento, setNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');

  const handleAdotanteRegistration = () => {
    // TO DO: implement adotante registration logic
    Alert.alert('Registro!', 'Parabéns, você se registrou com sucesso!');
  };

  return (
    <ScrollView style={{backgroundColor:'#ECE6F0', flex: 1}}>
      <View style={styles.registrationContainer}>
        <Text style={styles.title}>Cadastro Adotante</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nascimento"
          onChangeText={(text) => setNascimento(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sexo"
          onChangeText={(text) => setSexo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType='numeric'
          onChangeText={(text) => setTelefone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          onChangeText={(text) => setCep(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          onChangeText={(text) => setCidade(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          onChangeText={(text) => setEstado(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          onChangeText={(text) => setBairro(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Rua"
          onChangeText={(text) => setRua(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          onChangeText={(text) => setNumero(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Repetir Senha"
          onChangeText={(text) => setRepetirSenha(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button1} onPress={handleAdotanteRegistration}>
          <Text style={styles.buttonText1}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText2}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const AbrigoRegistrationScreen = ({navigation}: { navigation: NavigationProp<any> }) => {
  const [nomeInstituicao, setNomeInstituicao] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [bairro, setBairro] = useState ('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');

  const handleAbrigoRegistration = () => {
    // TO DO: implement abrigo registration logic
    Alert.alert('Registro!', 'Parabéns, você se registrou com sucesso!');
  };

  return (
    <ScrollView style={{backgroundColor:'#ECE6F0', flex: 1}}>
      <View style={styles.registrationContainer}>
        <Text style={styles.title}>Cadastro de Abrigo</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome da Instituição"
          onChangeText={(text) => setNomeInstituicao(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          keyboardType='numeric'
          onChangeText={(text) => setTelefone(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          keyboardType='numeric'
          onChangeText={(text) => setCep(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          onChangeText={(text) => setCidade(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          onChangeText={(text) => setEstado(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          onChangeText={(text) => setBairro(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Rua"
          onChangeText={(text) => setRua(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Número"
          onChangeText={(text) => setNumero(text)}
          />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
          />
        <TextInput
          style={styles.input}
          placeholder="Repetir Senha"
          onChangeText={(text) => setRepetirSenha(text)}
          secureTextEntry={true}
          />
        <TouchableOpacity style={styles.button1} onPress={handleAbrigoRegistration}>
          <Text style={styles.buttonText1}>Criar Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText2}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const BuscaAnimais = ({navigation}: { navigation: NavigationProp<any> }) => {
  const [nomeInstituicao, setNomeInstituicao] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState ('');
  const [raca, setRaca] = useState('');
  const [porte, setPorte] = useState('');
  const [sexo, setSexo] = useState('');
  const [idade, setIdade] = useState('');

  const handleBuscaAnimal = () => {
    // TO DO: implement abrigo registration logic
    Alert.alert('Busca Sucedida!');
  };

  return (
    <ScrollView style={{backgroundColor:'#ECE6F0', flex: 1}}>
      <View style={styles.buscaContainer}>
        <Text style={styles.title}>Buscar por animais ou abrigos</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome da Instituição"
          onChangeText={(text) => setNomeInstituicao(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          onChangeText={(text) => setCidade(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Bairro"
          onChangeText={(text) => setBairro(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Raca"
          onChangeText={(text) => setRaca(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Porte"
          onChangeText={(text) => setPorte(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sexo"
          onChangeText={(text) => setSexo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          onChangeText={(text) => setIdade(text)}
        />

        <TouchableOpacity style={styles.button1} onPress={handleBuscaAnimal}>
          <Text style={styles.buttonText1}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="AdotanteRegistration" component={AdotanteRegistrationScreen} />
      <Stack.Screen name="AbrigoRegistration" component={AbrigoRegistrationScreen} />
      <Stack.Screen name="BuscaAnimais" component={BuscaAnimais} />
    </Stack.Navigator>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECDFCC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  registrationContainer: {
    backgroundColor: '#ECE6F0',
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  icon: {
    marginBottom: 20,
    width: 150,
    height: 150
  },

  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  error: {
    color: 'red',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#F5F5F5',
    height: 50,
    width: 250,
    padding: 10,
    borderRadius: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonIcon: {
    marginRight: 10,
    color: '#65558F',
  },

  buttonText: {
    color: '#65558F',
    fontSize: 16,
  },

  buttonText1: {
    color: 'white',
    fontSize: 16,
  },

  button1: {
    backgroundColor: '#2c2c2c',
    height: 50,
    width: 250,
    padding: 10,
    borderRadius: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText2: {
    color: 'white',
    fontSize: 16,
  },

  button2: {
    backgroundColor: '#EC221F',
    height: 50,
    width: 250,
    padding: 10,
    borderRadius: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buscaContainer: {
    padding: 50,
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;