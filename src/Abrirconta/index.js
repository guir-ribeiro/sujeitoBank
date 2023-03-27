import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Switch, Button } from 'react-native';



export default function abrirConta(nome, idade, sexo, limite, estuda){

    alert(`
    Nome:${nome}
    Idade: ${idade}
    Sexo: ${sexo ? "Homem" : "Mulher"}
    Limite desejado: R$ ${limite},00
    ${estuda ? "Estuda" : ""}
    `)
  }