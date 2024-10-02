import {React, Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Alert, StyleSheet, Platform } from 'react-native';

class AdotanteRegistrationScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nome: 'Carlos',
          nascimento: '19/08/1997',
          sexo: 'Masculino',
          telefone: '32323232',
          email: 'ex@email.com',
          cep: '12345678',
          cidade: 'Juiz de Fora',
          estado: 'MG',
          bairro: 'Cascatinha',
          rua: 'Ladeira Alexandre Leonel',
          numero: '150',
          senha: '123',
          repetirSenha: '123',
        };
      }
      
      setNome = (value) => this.setState({ nome: value });
      setNascimento = (value) => this.setState({ nascimento: value });
      setSexo = (value) => this.setState({ sexo: value });
      setTelefone = (value) => this.setState({ telefone: value });
      setEmail = (value) => this.setState({ email: value });
      setCep = (value) => this.setState({ cep: value });
      setCidade = (value) => this.setState({ cidade: value });
      setEstado = (value) => this.setState({ estado: value });
      setBairro = (value) => this.setState({ bairro: value });
      setRua = (value) => this.setState({ rua: value });
      setNumero = (value) => this.setState({ numero: value });
      setSenha = (value) => this.setState({ senha: value });
      setRepetirSenha = (value) => this.setState({ repetirSenha: value });
      
      handleAdotanteRegistration = () => {
        const { nome, telefone, email, senha, repetirSenha } = this.state;
      
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (!nome) {
          this.showAlert('Erro', 'Nome é obrigatório.');
          return;
        }
        if (!telefone) {
          this.showAlert('Erro', 'Telefone é obrigatório.');
          return;
        }
        if (!regex.test(email)) {
          this.showAlert('Erro', 'Email inválido.');
          return;
        }
        if (!senha) {
          this.showAlert('Erro', 'Senha é obrigatória.');
          return;
        }
        if (senha !== repetirSenha) {
          this.showAlert('Erro', 'As senhas não coincidem.');
          return;
        }
      
        this.showAlert('Registro', 'Parabéns, você se registrou com sucesso!');
      
        const { navigation } = this.props;
        navigation.navigate('AnimaisDisponiveis');
      };
      
      showAlert = (title, message) => {
        if (Platform.OS === 'web') {
          window.alert(message); 
        } else {
          Alert.alert(title, message); 
        }
      };
      
      render() {
        const { navigation } = this.props;
      
        return (
          <ScrollView style={{ backgroundColor: '#ECDFCC', flex: 1 }}>
            <View style={styles.registrationContainer}>
              <Text style={styles.title}>Cadastro Adotante</Text>
              <View style={styles.container2}>
                <TextInput
                  style={styles.input}
                  placeholder="Nome"
                  onChangeText={(text) => this.setNome(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Nascimento"
                  onChangeText={(text) => this.setNascimento(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Sexo"
                  onChangeText={(text) => this.setSexo(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Telefone"
                  keyboardType='numeric'
                  onChangeText={(text) => this.setTelefone(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType='email-address'
                  onChangeText={(text) => this.setEmail(text)}
                />
      
                <TextInput
                  style={[styles.input, { marginTop: 30 }]}
                  placeholder="CEP"
                  onChangeText={(text) => this.setCep(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Cidade"
                  onChangeText={(text) => this.setCidade(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Estado"
                  onChangeText={(text) => this.setEstado(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Bairro"
                  onChangeText={(text) => this.setBairro(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Rua"
                  onChangeText={(text) => this.setRua(text)}
                />
      
                <TextInput
                  style={styles.input}
                  placeholder="Número"
                  onChangeText={(text) => this.setNumero(text)}
                />
      
                <TextInput
                  style={[styles.input, { marginTop: 35 }]}
                  placeholder="Senha"
                  onChangeText={(text) => this.setSenha(text)}
                  secureTextEntry={true}
                />
      
                <TextInput
                  style={[styles.input, { marginBottom: 35 }]}
                  placeholder="Repetir Senha"
                  onChangeText={(text) => this.setRepetirSenha(text)}
                  secureTextEntry={true}
                />
      
                <TouchableOpacity style={styles.button1} onPress={this.handleAdotanteRegistration}>
                  <Text style={styles.buttonText1}>Criar Conta</Text>
                </TouchableOpacity>
      
                <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
                  <Text style={styles.buttonText2}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        );
      };      
}

const styles = StyleSheet.create({
    registrationContainer: {
        backgroundColor: '#ECDFCC',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    container2:{
        display: 'flex',
        alignItems: "center",
        width: 340,
        height: 930,
        backgroundColor: '#ECE6F0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        marginHorizontal: 10,
        paddingVertical: 15,  
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 50,
        textAlign: 'center',
    },

    input: {
        color: "#B3B3B3",
        backgroundColor: '#FFFFFF',
        height: 45,
        width: 300,
        borderWidth: 1,
        borderColor: '#B3B3B3',
        padding: 8,
        marginBottom: 8,
        borderRadius: 5,
    },

    button1: {
        backgroundColor: '#2c2c2c',
        height: 40,
        width: 272,
        padding: 10,
        borderRadius: 16,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button2: {
        backgroundColor: '#EC221F',
        height: 40,
        width: 272,
        padding: 10,
        borderRadius: 16,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText1: {
        color: 'white',
        fontSize: 16,
    },

    buttonText2: {
        color: 'white',
        fontSize: 16,
    }
});

export default AdotanteRegistrationScreen;
