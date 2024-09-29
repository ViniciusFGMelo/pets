import {React, Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Alert, StyleSheet,Platform } from 'react-native';

class AbrigoRegistrationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeInstituicao: '',
      telefone: '',
      email: '',
      cep: '',
      cidade: '',
      estado: '',
      bairro: '',
      rua: '',
      numero: '',
      senha: '',
      repetirSenha: '',
    };
  }

  setNomeInstituicao = (value) => {
    this.setState({ nomeInstituicao: value });
  };

  setTelefone = (value) => {
    this.setState({ telefone: value });
  };

  setEmail = (value) => {
    this.setState({ email: value });
  };

  setCep = (value) => {
    this.setState({ cep: value });
  };

  setCidade = (value) => {
    this.setState({ cidade: value });
  };

  setEstado = (value) => {
    this.setState({ estado: value });
  };

  setBairro = (value) => {
    this.setState({ bairro: value });
  };

  setRua = (value) => {
    this.setState({ rua: value });
  };

  setNumero = (value) => {
    this.setState({ numero: value });
  };

  setSenha = (value) => {
    this.setState({ senha: value });
  };

  setRepetirSenha = (value) => {
    this.setState({ repetirSenha: value });
  };

  handleAbrigoRegistration = () => {
    const { nomeInstituicao, telefone, email, senha, repetirSenha } = this.state;

    const regex = /^.+@email\.com$/;

    const { navigation } = this.props;


  
    if (!nomeInstituicao || !telefone || !regex.test(email) || !senha || senha !== repetirSenha) {
        if (Platform.OS === 'web') {
            window.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
          } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
          }
      return;
    }


        if (Platform.OS === 'web') {
            window.alert('Registro!', 'Parabéns, você se registrou com sucesso!');
          } 
          else 
          {
            Alert.alert('Registro!', 'Parabéns, você se registrou com sucesso!');
          }
          navigation.goBack();
    };

  render() {

    const { navigation } = this.props;

    return (
      <ScrollView style={{ backgroundColor: '#ECDFCC', flex: 1 }}>
        <View style={styles.registrationContainer}>
          <Text style={styles.title}>Cadastro de Abrigo</Text>
          <View style={styles.container2}>
            <br></br>
            <br></br>
            <TextInput
              style={styles.input}
              placeholder="Nome da Instituição"
              value={this.state.nomeInstituicao}
              onChangeText={this.setNomeInstituicao}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              keyboardType="numeric"
              value={this.state.telefone}
              onChangeText={this.setTelefone}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={this.setEmail}
            />
            <br></br>
            
            <TextInput
              style={styles.input}
              placeholder="CEP"
              keyboardType="numeric"
              value={this.state.cep}
              onChangeText={this.setCep}
            />
            <TextInput
              style={styles.input}
              placeholder="Cidade"
              value={this.state.cidade}
              onChangeText={this.setCidade}
            />
            <TextInput
              style={styles.input}
              placeholder="Estado"
              value={this.state.estado}
              onChangeText={this.setEstado}
            />
            <TextInput
              style={styles.input}
              placeholder="Bairro"
              value={this.state.bairro}
              onChangeText={this.setBairro}
            />
            <TextInput
              style={styles.input}
              placeholder="Rua"
              value={this.state.rua}
              onChangeText={this.setRua}
            />
            <TextInput
              style={styles.input}
              placeholder="Número"
              value={this.state.numero}
              onChangeText={this.setNumero}
            />
            <br></br>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={this.state.senha}
              onChangeText={this.setSenha}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              placeholder="Repetir Senha"
              value={this.state.repetirSenha}
              onChangeText={this.setRepetirSenha}
              secureTextEntry={true}
            />
            <br></br>
            <TouchableOpacity style={styles.button1} onPress={this.handleAbrigoRegistration}>
              <Text style={styles.buttonText1}>Criar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText2}>Cancelar</Text>
            </TouchableOpacity>
          </View>
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

    container2:{
      display: 'flex',
      alignItems: "center",
      width: "380px",
      height: "800px",
      backgroundColor: '#ECE6F0',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: "#D9D9D9",
      overflow: 'hidden',
      marginHorizontal: 10,
      alignItems: "center",
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
      backgroundColor: '#ECDFCC',     
      flex: 1,
      flexDirection: 'column',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    title: {
      fontSize: "24px",
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 5,
      textAlign: 'center',
    },
  
    icon: {
      marginBottom: 20,
      width: 150,
      height: 150
    },
  
    input: {
      color: "#B3B3B3",
      backgroundColor: '#FFFFFF',
      height: 50,
      width: 300,
      borderWidth: 1,
      borderColor: '#B3B3B3',
      padding: 5,
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
      fontSize: "16px",
    },
  
    buttonText1: {
      color: 'white',
      fontSize: "16px",
    },
  
    button1: {
      backgroundColor: '#2c2c2c',
      height: 44,
      width: 272,
      padding: 10,
      borderRadius: 16,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonText2: {
      color: 'white',
      fontSize: "16px",
    },
  
    button2: {
      backgroundColor: '#EC221F',
      height: 44,
      width: 272,
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


export default AbrigoRegistrationScreen;
