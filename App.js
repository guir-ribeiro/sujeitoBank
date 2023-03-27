import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Switch, Button } from 'react-native';


import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import abrirConta from './src/Abrirconta';

export default function App() {

  const [limite, setLimite] = useState(0)
  const [sexo, setSexo] = useState('-')
  const [estuda, setEstuda] = useState(false)
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  // #757575 - #545454  - #004273 - #002440

  return (
    <View style={styles.container}>
      
      <Image
        source={require('./assets/Sujeito.png')}
        style={styles.logo}
      />

      <View  style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome'
          onChangeText={(nome)=>{setNome(nome)}}
        />
        <TextInput
          style={styles.input}
          placeholder='Idade'
          onChangeText={(idade)=>{setIdade(idade)}}
        />

        <View style={styles.blocoPicker} >
          <Text>Sexo:</Text>
          <Picker
            selectedValue={sexo}
            onValueChange={(itemValue, itemIndex)=>{setSexo(itemValue)}}
          >
            <Picker.Item label="-" value="0"/>
            <Picker.Item label="Masculino" value="m" />
            <Picker.Item label="Feminino" value="f" />
          </Picker>
        </View>

        <View>
          <Text> Limite desejado: </Text>
          <Slider
            minimumValue={0}
            maximumValue={1000}
            minimumTrackTintColor='#002440'
            maximumTrackTintColor='#545454'
            thumbTintColor='#004273'
            value={limite}
            step={100}
            onValueChange={(limiteSelecionado)=>{setLimite(limiteSelecionado)}}
          />
          <Text> R$ {limite.toFixed(0)}</Text>
        </View>

        <View style={styles.blocoswitch} >
          <Text >Estuda: </Text>
          <View style={styles.linhawitch}>
            <Text> Não </Text>
            <Switch
              trackColor={{true:'#002440', false:'#545454'}}
              thumbColor={'#004273'}
              value={estuda}
              onValueChange={(valorSelecionado)=>{setEstuda(valorSelecionado)}}
            />
            <Text>Sim </Text>
          </View>

        </View>

        <Button
          style={styles.buttonAbriConta}
          color="#004273"
          title='Abrir Conta'
          onPress={() => abrirConta(nome, idade, sexo, limite, estuda)}
        />


      </View>


     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'

  },
  logo:{
    width:200,
    height:100,
    marginTop:50,
  },
  form:{
    marginTop:40,
  },
  input: {
    height: 40,
    minWidth:320,
    marginBottom: 20,
    borderWidth: 0.5,
    padding: 10,
    borderRadius:8
  },
  blocoswitch:{
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
  },
  linhawitch:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:15,
    marginTop:-10,
  },
});


