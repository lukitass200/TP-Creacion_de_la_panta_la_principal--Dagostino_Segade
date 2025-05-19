import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import img from "./assets/imagen.png"


export default function App() {
  return (
    <View style={styles.container}>
      
      <StatusBar style="light" backgroundColor="#a33ea1" />

      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Dagostino_Segade)"</Text>
      </View>

    
      <Image source={img} />
      <View style={{display:'flex' , justifyContent:'center', flexDirection:"column", backgroundColor: "blue", width: "100vw"}}>
  
        <TextInput style={styles.input} placeholder="Usuario/Gmail" placeholderTextColor="#a85bbd"  />
        <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#a85bbd" />
      </View>
   
    
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      <Text style={styles.signature}>Olvidaste la clave?</Text>
      <Text style={styles.signature}>Crear cuenta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
  header: {
    height: 80,
    backgroundColor: '#a33ea1',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 150,
  },

  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {

    borderWidth: 3,
    margintop:30,

    borderColor: '#a33ea1',
    borderRadius: 5,
    width:"50vw",
    marginVertical: 10,
    margin:5,
    alignItems: "center",
    justifyContent: "center"

  },
  button: {
    backgroundColor: '#c4b3e6',
    padding: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  signature: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#333',
  },
});
