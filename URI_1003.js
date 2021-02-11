import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Basic1003 = () => {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [total, setTotal] = useState('');

  const calc = () => {
    const calcValue = parseInt(numA, 0) + parseInt(numB, 0);
    setTotal(calcValue);
  };
  return (
    <View style={styles.container}>
      <Text>Soma de dois números</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui"
          value={numA}
          onChangeText={setNumA}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui"
          value={numB}
          onChangeText={setNumB}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`SOMA = ${total}`}</Text>
      <TouchableOpacity onPress={calc}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  containerTextInput: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    flex: 1,
    fontSize: 30,
    color: '#000',
  },

  text: {
    fontSize: 22,
    alignSelf: 'center',
    color: '#000',
  },

  button: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    fontSize: 20,
  },

  divider: {
    marginHorizontal: 5,
  },
});

export default Basic1003;
