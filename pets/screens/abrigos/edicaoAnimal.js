import {React, Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, ScrollView, Alert, StyleSheet,Platform, Picker } from 'react-native';

class EdicaoAnimal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      porte: '',
      idade: '',
      raca: '',
      sexo: '',
      peso: '',
      info_vacinacao: '',
      statusAdocao: '',
    };
  }

  setNome = (value) => {
    this.setState({ nome: value });
  };

  setPorte = (value) => {
    this.setState({ porte: value });
  };

  setIdade = (value) => {
    this.setState({ idade: value });
  };

  setRaca = (value) => {
    this.setState({ raca: value });
  };

  setSexo = (value) => {
    this.setState({ sexo: value });
  };

  setPeso = (value) => {
    this.setState({ peso: value });
  };

  setInfoVacinacao = (value) => {
    this.setState({ info_vacinacao: value });
  };

  setStatusAdocao = (value) => {
    this.setState({ statusAdocao: value });
  };

  handleEdicaoAnimal = () => {
    const { nome, porte, idade, raca, sexo, peso, info_vacinacao } = this.state;

    const { navigation } = this.props;


  
    if (!nome || !porte || !idade || !raca || !sexo ||!peso || !info_vacinacao ) {
        if (Platform.OS === 'web') {
            window.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
          } else {
            Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
          }
      return;
    }

  

    if (Platform.OS === 'web') {
        window.alert('Salvo!', 'Salvo com sucesso!');
      } 
      else 
      {
        Alert.alert('Salvo!', 'Salvo com sucesso!');
      }
      navigation.goBack();
    };

  render() {

    const { navigation } = this.props;

    return (
      <ScrollView style={{ backgroundColor: '#ECE6F0', flex: 1 }}>
        <View style={styles.registrationContainer}>
          <Text style={styles.title}>Edição de Animais</Text>
          <View style={styles.container2}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TextInput
              style={styles.input}
              placeholder="Kakaroto"
              value={this.state.nome}
              onChangeText={this.setNome}
            />
            <TextInput
              style={styles.input}
              placeholder="Grande"
              value={this.state.porte}
              onChangeText={this.setPorte}
            />
            <TextInput
              style={styles.input}
              placeholder="6"
              keyboardType="numeric"
              value={this.state.idade}
              onChangeText={this.setIdade}
            />
            <TextInput
              style={styles.input}
              placeholder="Golden"
              value={this.state.raca}
              onChangeText={this.setRaca}
            />
            <TextInput
              style={styles.input}
              placeholder="Masculino"
              value={this.state.sexo}
              onChangeText={this.setSexo}
            />
            <TextInput
              style={styles.input}
              placeholder="20"
              value={this.state.peso}
              onChangeText={this.setPeso}
            />
            <TextInput
              style={styles.input}
              placeholder="Vacina de raiva atrasada"
              value={this.state.info_vacinacao}
              onChangeText={this.setInfoVacinacao}
            />
            <br></br>

            <TouchableOpacity style={styles.buttonAdc} onPress={this.adicionarImagem}>
              <Text style={styles.buttonText1}>Alterar Imagem</Text>
            </TouchableOpacity>

            <br></br><br></br>

            <Text style={styles.status}>Status de Adoção</Text>
            <Picker style={styles.picker}
              selectedValue={this.state.statusAdocao}
              onValueChange={(itemValue) => setStatusAdocao(itemValue)}
            >
              <Picker.Item label="Disponível" value="Disponível" />
              <Picker.Item label="Adotado" value="Adotado" />
            </Picker>

            <br></br><br></br>
            <br></br><br></br>
            
            <TouchableOpacity style={styles.button1} onPress={this.handleEdicaoAnimal}>
              <Text style={styles.buttonText1}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2} onPress={() => navigation.goBack()}>
              <Text style={styles.buttonText2}>Cancelar</Text>
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
      width: "380px",
      height: "800px",
      backgroundColor: '#F5F5F5',
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
      fontSize: "24px",
      fontWeight: 'bold',
      marginBottom: 20,
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
  
    buttonAdc: {
      backgroundColor: '#009951',
      height: 45,
      width: 300,
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
      fontSize: "16px",
    },
  
    buttonText1: {
      color: 'white',
      fontSize: "16px",
    },
  
    button1: {
      backgroundColor: '#2c2c2c',
      height: 45,
      width: 300,
      padding: 10,
      borderRadius: 16,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    buttonText2: {
      color: 'white',
      fontSize: "16px",
    },
  
    button2: {
      backgroundColor: '#EC221F',
      height: 45,
      width: 300,
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
    },

    status:{
      fontSize: "18px",
      marginBottom: 10,
      marginRight: 160,
      textAlign: 'center',
    },

    picker:{
      height: 45,
      width: 300,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      marginBottom: 10,
    }

  });


export default EdicaoAnimal;
