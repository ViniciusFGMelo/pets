import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native-gesture-handler';

const dogs = [
  { 
    id: '1', 
    name: 'Kakaroto', 
    location: 'Abrigo do Julio, Cascatinha,\nJuiz de Fora', 
    image: require('../../assets/images/dog7.png') 
  },
  { 
    id: '2', 
    name: 'Gonzaga', 
    location: 'Pet\'s, Milho Branco, Juiz de\nFora', 
    image: require('../../assets/images/dog6.png') 
  },
  { 
    id: '3', 
    name: 'Look-ahead', 
    location: 'Cão Cuidado, Teixeiras,\nJuiz de Fora', 
    image: require('../../assets/images/dog5.png') 
  },
  { 
    id: '4', 
    name: 'Cadete', 
    location: 'Santo Cão, Santo Antônio, \nJuiz de Fora', 
    image: require('../../assets/images/dog4.png') 
  },
];

const AnimaisDisponiveis = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Animais Disponíveis</Text>

        {/* Botão Buscar Animais */}
        <TouchableOpacity 
          style={styles.searchButton} 
          onPress={() => navigation.navigate('BuscaAnimais')}
        >
          <FontAwesomeIcon icon={faSearch} size={20} color="white" style={styles.searchIcon} />
          <Text style={styles.buttonText}>Buscar Animais</Text>
        </TouchableOpacity>

        <View style={styles.container2}>
          <FlatList
            data={dogs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.dogContainer}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.infoContainer}>
                  <View>
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.location}>{item.location}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECDFCC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    display: 'flex',
    alignItems: "center",
    width: '450px',
    marginBottom: 10,
    backgroundColor: 'white',
    overflow: 'hidden',
    marginHorizontal: 10,
    alignItems: "center",
  },

  title: {
    fontSize: 24, // Ajuste para número
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 40,
    textAlign: 'center',
  },

  searchButton: {
    backgroundColor: '#65558F',
    padding: 10,
    borderRadius: 8, // Ângulo menor
    marginBottom: 20,
    width: 200, // Largura do botão
    flexDirection: 'row', // Para alinhar ícone e texto
    alignItems: 'center', // Alinha verticalmente o ícone e texto
    justifyContent: 'center', // Centraliza o conteúdo
  },

  searchIcon: {
    marginRight: 10, // Espaçamento entre o ícone e o texto
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  dogContainer: {
    marginTop: 10,
    display: 'flex',
    alignItems: "center",
    width: '400px',
    height: '370px',
    marginBottom: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    alignItems: "center",
  },

  image: {
    marginTop: 12,
    width: 370,
    height: 300,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    right: 45,
    top: 10,
  },

  location: {
    left: 45,
    fontSize: 15,
    top: 10,
    color: '#555',
  },
});

export default AnimaisDisponiveis;
