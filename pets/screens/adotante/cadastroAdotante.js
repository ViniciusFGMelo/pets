import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Alert, StyleSheet, Platform } from 'react-native';

class AdotanteRegistrationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            nascimento: '',
            sexo: '',
            telefone: '',
            email: '',
            cep: '',
            cidade: '',
            estado: '',
            bairro: '',
            rua: '',
            numero: '',
            senha: '',
            senha: '',
            repetirSenha: ''
        };
        this.setNome = this.setNome.bind(this);
        this.setNascimento = this.setNascimento.bind(this);
        this.setSexo = this.setSexo.bind(this);
        this.setTelefone = this.setTelefone.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setCep = this.setCep.bind(this);
        this.setCidade = this.setCidade.bind(this);
        this.setEstado = this.setEstado.bind(this);
        this.setBairro = this.setBairro.bind(this);
        this.setRua = this.setRua.bind(this);
        this.setNumero = this.setNumero.bind(this);
        this.setSenha = this.setSenha.bind(this);
        this.setRepetirSenha = this.setRepetirSenha.bind(this);
    };
    setNome(value) {
        this.setState({ nome: value });
    }

    setNascimento(value) {
        this.setState({ nascimento: value });
    }

    setSexo(value) {
        this.setState({ sexo: value });
    }

    setTelefone(value) {
        this.setState({ telefone: value });
    }

    setEmail(value) {
        this.setState({ email: value });
    }

    setCep(value) {
        this.setState({ cep: value });
    }

    setCidade(value) {
        this.setState({ cidade: value });
    }

    setEstado(value) {
        this.setState({ estado: value });
    }

    setBairro(value) {
        this.setState({ bairro: value });
    }

    setRua(value) {
        this.setState({ rua: value });
    }

    setNumero(value) {
        this.setState({ numero: value });
    }

    setSenha(value) {
        this.setState({ senha: value });
    }

    setRepetirSenha(value) {
        this.setState({ repetirSenha: value });
    }

    handleAdotanteRegistration = () => {
        // TO DO: implement adotante registration logic
        const { nome, nascimento, sexo, telefone, email, cep, cidade, estado, bairro, rua, numero, senha, repetirSenha } = this.state;
        const regex = /^.+@email\.com$/;
        const { navigation } = this.props;

        // Validações simples
        if (!nome || !telefone || !regex.test(email) || !senha || senha !== repetirSenha) {
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
        else {
            Alert.alert('Registro!', 'Parabéns, você se registrou com sucesso!');
        }
        navigation.goBack(); // Retorna à tela anterior após o registro
    };
    render() {
        const { navigation } = this.props;

        return (
            <ScrollView style={{ backgroundColor: '#ECDFCC', flex: 1 }}>
                <View style={styles.registrationContainer}>
                    <Text style={styles.title}>Cadastro Adotante</Text>
                    <View style={styles.container2}>
                        <br></br>
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
                        <br></br>
                        <TextInput
                            style={styles.input}
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
                        <br></br>
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            onChangeText={(text) => this.setSenha(text)}
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Repetir Senha"
                            onChangeText={(text) => this.setRepetirSenha(text)}
                            secureTextEntry={true}
                        />
                        <br></br>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 50,
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
        fontSize: 16,
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

export default AdotanteRegistrationScreen;