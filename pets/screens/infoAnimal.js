import {React} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const InfoAnimal = () => {
  return (
    <View style={styles.container}>
        <View style={styles.infoContainer}>
            <View style={styles.infoImage}>
                <Image
                source={require('../assets/images/dog3.png')}
                style={styles.image}
                />
            </View>
            <View style={styles.ossos}>
                <Image source={require("../assets/images/osso2.png")} style={styles.osso2}/>
            </View>

        
            <Text style={styles.name}>Raimundo Neto</Text>
            <Text style={styles.status}>Disponível</Text>
            <br></br>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
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
        width: 150,
        height: 200,
        marginBottom: 20,
        marginLeft: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,     
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center', 
        overflow: "hidden",
    },
    
    image: {
        width: '100%',     
        height: '100%',   
        borderRadius: 10,   
        resizeMode: 'cover',
    },
      

    ossos: {
        marginBottom: -50,
    },

    osso2: {
        width: 60,
        height: 60,
        left: 180,
        top: 10,
    },

    infoContainer: {
        padding: 20,
        backgroundColor: "#F5F5F5"
    },

    name: {
        fontSize: "18px",
        fontWeight: 'bold',
        marginBottom: 10,
        left: 60,
    },

    status: {
        fontSize: "15px",
        color: 'green',
        marginBottom: 10,
        left: 90,
    },

    detail: {
        fontSize: "16px",
        marginBottom: 5,
    },
});

export default InfoAnimal;
