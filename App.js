import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementa = () => {
    setContador(contador + 1);
  };

  const decrementa = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.contendor1}>
      <View style={styles.contenedorTexto}>
        <Text style={styles.contadorTexto}>Contador Manual: {contador}</Text>
      </View>
      <View style={styles.botonesContainer}>
        <View style={styles.button}>
          <Button
            title="Incrementar"
            onPress={incrementa}
            color="#2B9DBF"
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Decrementar"
            onPress={decrementa}
            color="#A42424"
          />
        </View>
      </View>
      <View style={styles.alumnoContainer}>
        <Text style={styles.alumno}>Mauricio Joaquin Martinez Chan</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  contendor1: {
    flex: 1,
    backgroundColor: '#D3C9F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedorTexto: {
    marginBottom: 20,
  },
  contadorTexto: {
    fontSize: 25,
  },
  botonesContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    marginHorizontal: 10,
  },
  alumnoContainer: {
  },
  alumno: {
    fontSize: 16,
    color: '#555',
  },
});
