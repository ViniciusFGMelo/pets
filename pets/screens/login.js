import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // Import correto para React Native
import { faPlayCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';

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

  clearEmail = () => {
    this.setState({ email: '' });
  };

  clearPassword = () => {
    this.setState({ password: '' });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const { navigation } = this.props;  // Adicione isso para acessar a navegação
    if (email === 'test@email.com' && password === 'test') {
      navigation.navigate('AnimaisDisponiveis');
    } else {
      Alert.alert('Erro!', 'Email ou senha incorretos!');
    }
  };
  

  isEmailValid = () => {
    const { email, password } = this.state;
    const regex = /^.+@email\.com$/;

    return regex.test(email) && password.length >= 4;
  };

  render() {
    const { email, password } = this.state;
    const { navigation } = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Pets</Text>
          <Image source={require('../assets/images/dog1.png')} style={styles.icon} />
          
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={this.setEmail}
            value={email}
          />
          <TouchableOpacity onPress={this.clearEmail}>
            <Image source={require("../assets/images/iconl.png")} style={styles.image} />
          </TouchableOpacity>
          
          <TextInput
            style={styles.input}
            placeholder="senha"
            onChangeText={this.setPassword}
            value={password}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={this.clearPassword}>
            <Image source={require("../assets/images/iconl.png")} style={styles.image} />
          </TouchableOpacity>

          <Text style={styles.error}>
            {email !== '' && password !== '' && !this.isEmailValid() ? 'Email ou senha incorretos' : ''}
          </Text>
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
            <FontAwesomeIcon icon={faPlayCircle} size={24} color="#65558F" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Registration')}>
            <FontAwesomeIcon icon={faUser} size={24} color="#65558F" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Primeiro Acesso</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
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
      fontSize: 32,
      marginBottom: 30,
      marginTop: 120,
      textAlign: 'center',
    },
  
    icon: {
      marginBottom: 150,
      width: 180,
      height: 180,
    },
  
    input: {
      height: 50,
      width: 300,
      borderBottomWidth: 1,
      backgroundColor: '#E6E0E9',
      padding: 10,
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
    },

    image: {
      width: 25,
      height: 25,
      left: 130,
      bottom: 35,
    }
  });

export default LoginScreen;
