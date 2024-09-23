import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, Platform } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faUser } from '@fortawesome/free-solid-svg-icons';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  setEmail = (value) => {
    this.setState({ email: value });
  };

  setPassword = (value) => {
    this.setState({ password: value });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    if (email === 'test@email.com' && password === 'test') {
      if (Platform.OS === 'web') {
        window.alert('Sucesso! ' , 'Login realizado com sucesso!');
      } else {
        Alert.alert('Sucesso!', 'Login realizado com sucesso!');
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert('Erro! ', 'Email ou senha incorretos!');
      } else {
        Alert.alert('Erro!', 'Email ou senha incorretos!');
      }
    }
  };

  isEmailValid = () => {
    const { email, password } = this.state;
    const regex = /^.+@email\.com$/

    return  regex.test(email) && password.length()>=4 ;
  };

  render() {
    const { email, password } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Pets</Text>
        <Image source={require('../assets/images/dog1.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={this.setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={this.setPassword}
          value={password}
          secureTextEntry={true}
        />
        <Text style={styles.error}>
          {email !== '' && password !== '' && !this.isEmailValid() ? 'Email ou senha incorretos' : ''}
        </Text>
        <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroUser')}>
          <FontAwesomeIcon icon={faUser} size={20} color="#65558F" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Cadastro User</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CadastroAnimal')}>
          <FontAwesomeIcon icon={faUser} size={20} color="#65558F" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>CadastroAnimal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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

export default LoginScreen;
