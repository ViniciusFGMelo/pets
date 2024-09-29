import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class RegistrationScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.registrationContainer}>
                <Image source={require('../assets/images/dog2.png')} style={styles.icon} />
                <Text style={styles.title}>Seleção de Perfil</Text>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.navigate('AbrigoRegistration')}
                    accessibilityLabel="Registro de Abrigo"
                    accessible
                >
                    <FontAwesomeIcon icon={faUser} size={20} color="#65558F" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Abrigo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        console.log("Navigating to AdotanteRegistration");
                        navigation.navigate('AdotanteRegistration');
                    }}
                    accessibilityLabel="Registro de Adotante"
                    accessible
                >
                    <FontAwesomeIcon icon={faUser} size={20} color="#65558F" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Quero adotar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    registrationContainer: {
        backgroundColor: '#ECDFCC',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24, // Ajuste para número
        fontWeight: 'bold',
        marginBottom: 100,
        textAlign: 'center',
    },
    icon: {
        marginBottom: 20,
        width: 150,
        height: 150,
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
    },
    buttonText: {
        color: '#65558F',
        fontSize: 16, 
    },
});

export default RegistrationScreen;
