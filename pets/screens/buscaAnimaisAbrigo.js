import React,  {Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Alert, StyleSheet , Platform, Image } from 'react-native';

class BuscaAnimais extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomeInstituicao: '',
            cidade: '',
            bairro: '',
            raca: '',
            porte: '',
            sexo: '',
            idade: '',
        };
    }

    setNomeInstituicao = (value) => {
        this.setState({ nomeInstituicao: value });
    };

    setCidade = (value) => {
        this.setState({ cidade: value });
    };

    setBairro = (value) => {
        this.setState({ bairro: value });
    };

    setRaca = (value) => {
        this.setState({ raca: value });
    };

    setPorte = (value) => {
        this.setState({ porte: value });
    };

    setSexo = (value) => {
        this.setState({ sexo: value });
    };

    setIdade = (value) => {
        this.setState({ idade: value });
    };

    handleBuscaAnimal = () => {
        const { nomeInstituicao, cidade, bairro, raca, porte, sexo, idade } = this.state;
        const { navigation } = this.props; 
    
        if (Platform.OS === 'web') {
            window.alert('Busca Sucedida!', `Instituição: ${nomeInstituicao}\nCidade: ${cidade}\nBairro: ${bairro}\nRaça: ${raca}\nPorte: ${porte}\nSexo: ${sexo}\nIdade: ${idade}`);
            navigation.navigate('AnimaisDisponiveis');
        } else {
            Alert.alert('Busca Sucedida!', `Instituição: ${nomeInstituicao}\nCidade: ${cidade}\nBairro: ${bairro}\nRaça: ${raca}\nPorte: ${porte}\nSexo: ${sexo}\nIdade: ${idade}`);
            navigation.navigate('AnimaisDisponiveis');
        }
    };
    

    render() {
        const { navigation } = this.props;

        return (
            <ScrollView style={{ backgroundColor: '#ECDFCC', flex: 1 }}>
                <View style={styles.buscaContainer}>
                    <View style={styles.container2}>
                        <View style={styles.ossos}>
                            <Image source={require("../assets/images/osso1.png")} style={styles.osso1}/>
                            <Image source={require("../assets/images/osso2.png")} style={styles.osso2}/>
                        </View>
                        <Text style={styles.title}>Buscar por animais {'\n'} ou abrigos</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome da Instituição"
                                value={this.state.nomeInstituicao}
                                onChangeText={this.setNomeInstituicao}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Cidade"
                                value={this.state.cidade}
                                onChangeText={this.setCidade}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Bairro"
                                value={this.state.bairro}
                                onChangeText={this.setBairro}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Raça"
                                value={this.state.raca}
                                onChangeText={this.setRaca}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Porte"
                                value={this.state.porte}
                                onChangeText={this.setPorte}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Sexo"
                                value={this.state.sexo}
                                onChangeText={this.setSexo}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Idade"
                                value={this.state.idade}
                                onChangeText={this.setIdade}
                            />

                            <TouchableOpacity style={styles.button1} onPress={this.handleBuscaAnimal}>
                                <Text style={styles.buttonText1}>Buscar</Text>
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
        width: 340,
        height: 750,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        marginHorizontal: 10,
        alignItems: "center",
    },

    ossos: {
        marginBottom: -50,
    },

    osso1: {
        width: 70,
        height: 70,
        right: 135,
    },

    osso2: {
        width: 70,
        height: 70,
        left: 135,
        bottom: 70,
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
        marginBottom: 40,
        textAlign: 'center',
    },

    icon: {
        marginBottom: 20,
        width: 150,
        height: 150
    },

    input: {
        color: "#B3B3B3",
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
        width: 323,
        padding: 10,
        borderRadius: 16,
        marginBottom: 100,
        marginTop: 50,
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
        backgroundColor: '#ECDFCC',     
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default BuscaAnimais;
