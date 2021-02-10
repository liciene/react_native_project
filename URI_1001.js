import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Basic1001 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const calc = () => {
    const calcValue = parseInt(num1, 0) + parseInt(num2, 0);
    setResult(calcValue);
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui"
          value={num1}
          onChangeText={(value) => setNum1(value)}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Digite aqui"
          value={num2}
          onChangeText={(value) => setNum2(value)}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`Resultado: ${result}`}</Text>
      <TouchableOpacity onPress={calc}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Somar</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTextInput: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  textInput: {
    borderWidth: 1,
    flex: 1,
  },

  text: {
    fontSize: 22,
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
    fontSize: 16,
  },

  container: {
    padding: 5,
  },

  divider: {
    marginHorizontal: 5,
  },
});

export default Basic1001;
