import React, {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Basic1007 = () => {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [numC, setNumC] = useState('');
  const [numD, setNumD] = useState('');
  const [diff, setDiff] = useState('');

  const calc = () => {
    const calcValue =
      parseInt(numA, 0) * parseInt(numB, 0) -
      parseInt(numC, 0) * parseInt(numD, 0);
    setDiff(calcValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diferença de A*B por C*D</Text>
      <Text style={styles.textObs}>
        {
          'Obs.: Leia quatro valores inteiros A, B, C e D. Calcule e mostre a diferença do produto de A e B pelo produto de C e D.'
        }
      </Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Valor A"
          value={numA}
          onChangeText={setNumA}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor B"
          value={numB}
          onChangeText={setNumB}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor C"
          value={numC}
          onChangeText={setNumC}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor D"
          value={numD}
          onChangeText={setNumD}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`DIFERENÇA = ${diff}`}</Text>
      <TouchableOpacity onPress={calc}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Calcular diferença</Text>
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
    marginBottom: 5,
    justifyContent: 'space-between',
  },

  divider: {
    marginHorizontal: 5,
  },

  textInput: {
    borderWidth: 1,
    flex: 1,
    fontSize: 18,
  },

  text: {
    fontSize: 20,
    alignSelf: 'center',
  },

  textObs: {
    padding: 5,
    fontSize: 12,
    textAlign: 'center',
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
});

export default Basic1007;
