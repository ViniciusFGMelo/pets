import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const InfoAnimal = ({ route }) => {
  const { animal } = route.params; // Recebe o animal da navegação

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.infoImage}>
          <Image
            source={animal.image}
            style={styles.image}
          />
        </View>
        <View>
          <Image source={require("../assets/images/osso2.png")} style={styles.osso2} />
        </View>
        <Text style={styles.name}>{animal.name}</Text>
        <Text style={styles.status}>Disponível</Text>
        <Text style={styles.detail}>Porte: Pequeno</Text>
        <Text style={styles.detail}>Idade: 1 ano</Text>
        <Text style={styles.detail}>Raça: Salsicha</Text>
        <Text style={styles.detail}>Vacinação: Em dia</Text>
        <Text style={styles.detail}>Sexo: Masculino</Text>
        <Text style={styles.detail}>Peso: 5 kg;</Text>
        <Text style={styles.detail}>Abrigo: Eldorado</Text>
        <Text style={styles.detail}>Telefone: (32) 3232-3232</Text>
        <Text style={styles.detail}>Email: el_dorado@abrigo.com.br</Text>
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

    infoImage: {
        width: 300,
        height: 200,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,     
        backgroundColor: 'white',
    },
    
    image: {
        width: '100%',     
        height: '100%',   
        borderRadius: 10,   
        resizeMode: 'cover',
    },

    osso2: {
        width: 60,
        height: 60,
        left: 230,
        top: 10,
    },

    infoContainer: {
        padding: 20,
        backgroundColor: "#F5F5F5"
    },

    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        left: 100,
        bottom: 60,
    },

    status: {
        fontSize: 15,
        color: 'green',
        marginBottom: 10,
        left: 115,
        bottom: 60,
    },

    detail: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default InfoAnimal;
