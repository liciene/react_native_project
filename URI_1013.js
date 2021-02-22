import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Basic1013 = () => {
  const [numA, setNumA] = useState('');
  const [numB, setNumB] = useState('');
  const [numC, setNumC] = useState('');

  const [maior, setMaior] = useState('');

  const calc = () => {
    const maiorAB =
      (parseFloat(numA) +
        parseFloat(numB) +
        Math.abs(parseFloat(numA) - parseFloat(numB))) /
      2;
    const maiorABC =
      (maiorAB + parseFloat(numC) + Math.abs(maiorAB - numC)) / 2;
    setMaior(maiorABC);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Maior absoluto</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="A"
          value={numA}
          onChangeText={setNumA}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="B"
          value={numB}
          onChangeText={setNumB}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="C"
          value={numC}
          onChangeText={setNumC}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`${maior} é maior`}</Text>
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
    marginTop: 10,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  divider: {
    marginHorizontal: 5,
  },

  textInput: {
    borderWidth: 1,
    flex: 1,
    fontSize: 20,
  },

  text: {
    fontSize: 20,
    alignSelf: 'center',
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

export default Basic1013;
