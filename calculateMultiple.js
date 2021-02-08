import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const CalculateMultiple = () => {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [result, setResult] = useState('');

  const handleCalculateMultiple = () => {
    if (inputA && inputB) {
      if (
        parseInt(inputA) % parseInt(inputB) === 0 ||
        parseInt(inputB) % parseInt(inputA) === 0
      ) {
        setResult('São Multiplos');
      } else {
        setResult('Não Sao Multiplos');
      }
      Alert.alert('Calculado com sucesso');
    } else {
      Alert.alert('Não foi calculado com sucesso');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result}</Text>
      <TextInput value={inputA} onChangeText={setInputA} style={styles.input} />
      <TextInput value={inputB} onChangeText={setInputB} style={styles.input} />
      <Button title={'Calcular multiplos'} onPress={handleCalculateMultiple} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {margin: 20},
  title: {fontSize: 16, marginBottom: 10, alignSelf: 'center'},
  input: {
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default CalculateMultiple;
