import {React} from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const dogs = [
  { 
    id: '1', 
    name: 'Kakaroto', 
    image: require('../../assets/images/dog7.png') 
  },
  { 
    id: '2', 
    name: 'Gonzaga', 
    image: require('../../assets/images/dog6.png') 
  },
  { 
    id: '3', 
    name: 'First-Follow',
    image: require('../../assets/images/dog8.png') 
  },
  { 
    id: '4', 
    name: 'Francisco',
    image: require('../../assets/images/cat1.png') 
  },
];

const AnimaisDisponiveis = () => {
  return (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.title}>Abrigo do Júlio</Text>
            <View style={styles.container2}>
              <br></br>
              <br></br>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar Animais</Text>
              </TouchableOpacity>
              <FlatList
              data={dogs}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                  <View style={styles.dogContainer}>
                      <Image source={item.image} style={styles.image} />
                      <View style={styles.infoContainer}>
                        <Text style={styles.name}>{item.name}</Text>
                        <TouchableOpacity style={styles.editIcon}>
                          <Image source={require('../../assets/images/edit.png')} style={styles.editIconText}/>
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.location}>{item.location}</Text>
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
    fontSize: "24px",
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 40,
    textAlign: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: "16px",
  },

  button: {
    marginTop: 50,
    backgroundColor: '#2c2c2c',
    height: 45,
    width: 350,
    padding: 10,
    borderRadius: 16,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dogContainer: {
    marginTop: 50,
    display: 'flex',
    alignItems: "center",
    width: '400px',
    marginBottom: 10,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 10,
    alignItems: "center",
    elevation: 2,
  },

  image: {
    marginTop: 15,
    width: 370,
    height: 300,
    borderRadius: 10,
    marginBottom: 20
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },

  editIcon: {
    width: 35,
    height: 30,
    alignItems: 'center',
    right: 15,
    bottom: 10,
  },

  editIconText: {
    width: 30,
    height: 30,
  },

  name: {
    fontSize: "20px",
    fontWeight: 'bold',
    bottom: 10,
    left: 15,
  },

  location: {
    fontSize: "15px",
    color: '#555',
    textAlign: 'center',
  },
});

export default AnimaisDisponiveis;
