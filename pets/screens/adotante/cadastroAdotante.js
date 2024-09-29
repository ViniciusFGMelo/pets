import {React, Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Alert, StyleSheet, Platform } from 'react-native';

class AdotanteRegistrationScreen extends Component {
    // Mesmo código anterior, removido por brevidade...

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
        width: "380px",
        height: "800px",
        backgroundColor: '#ECE6F0',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#D9D9D9",
        marginHorizontal: 10,
        paddingVertical: 15,  // Reduzi o espaçamento vertical interno
    },

    title: {
        fontSize: "22px",  // Reduzi o tamanho da fonte
        fontWeight: 'bold',
        marginBottom: 10,  // Reduzi a margem inferior
        marginTop: 20,  // Reduzi a margem superior
        textAlign: 'center',
    },

    input: {
        color: "#B3B3B3",
        backgroundColor: '#FFFFFF',
        height: 45,  // Reduzi a altura dos inputs
        width: 300,
        borderWidth: 1,
        borderColor: '#B3B3B3',
        padding: 8,  // Reduzi o padding interno dos inputs
        marginBottom: 8,  // Reduzi o espaçamento entre os inputs
        borderRadius: 5,
    },

    button1: {
        backgroundColor: '#2c2c2c',
        height: 40,  // Reduzi a altura do botão
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
        height: 40,  // Reduzi a altura do botão
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
        fontSize: "16px",
    },

    buttonText2: {
        color: 'white',
        fontSize: "16px",
    }
});

export default AdotanteRegistrationScreen;
