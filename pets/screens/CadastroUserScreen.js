import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const CadastroUser = () => {
  return (
    <View style={styles.container}>
        <View style={styles.infoContainer}>
        <Image
            source={require('../assets/images/dog3.png')} // Replace with the actual path to your image
            style={styles.image}
            />
        
            <Text style={styles.name}>Raimundo Neto</Text>
            <Text style={styles.status}>Disponível</Text>
            <Text style={styles.detail}><strong>Porte:</strong> Pequeno</Text>
            <Text style={styles.detail}><strong>Idade:</strong> 1 ano</Text>
            <Text style={styles.detail}><strong>Raça:</strong> Salsicha</Text>
            <Text style={styles.detail}><strong>Vacinação:</strong> Em dia</Text>
            <Text style={styles.detail}><strong>Sexo:</strong> Masculino</Text>
            <Text style={styles.detail}><strong>Peso:</strong> 5 kg;</Text>
            <br></br>
            <Text style={styles.detail}><strong>Abrigo:</strong> Eldorado</Text>
            <Text style={styles.detail}><strong>Telefone:</strong> (32) 3232-3232</Text>
            <Text style={styles.detail}><strong>Email:</strong> el_dorado@abrigo.com.br<br></br>
            3212300, Eldorado, Juiz de Fora,
            <br></br>MG. Rua El Thaco, 12</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECDFCC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 200,
        marginBottom: 20,
        marginLeft: 50,
        border: '2px solid white',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    infoContainer: {
        padding: 20,
        border: '2px, solid white',
        borderRadius: 10,
        backgroundColor: "#F5F5F5"
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    status: {
        fontSize: 18,
        color: 'green',
        marginBottom: 10,
    },
    detail: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default CadastroUser;
