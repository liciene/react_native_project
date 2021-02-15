import React, {useState} from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

const Basic1010 = () => {
  const [qtd1, setQtd1] = useState('');
  const [valor1, setValor1] = useState('');
  const [qtd2, setQtd2] = useState('');
  const [valor2, setValor2] = useState('');
  const [total, setTotal] = useState('');

  const calc = () => {
    const calcValue =
      parseFloat(qtd1) * parseFloat(valor1) +
      parseFloat(qtd2) * parseFloat(valor2);
    setTotal(calcValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cálculo de compra</Text>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Quantidade da peça 1"
          value={qtd1}
          onChangeText={setQtd1}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor da peça 1"
          value={valor1}
          onChangeText={setValor1}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.containerTextInput}>
        <TextInput
          style={styles.textInput}
          placeholder="Quantidade da peça 2"
          value={qtd2}
          onChangeText={setQtd2}
          keyboardType="number-pad"
        />
        <View style={styles.divider} />
        <TextInput
          style={styles.textInput}
          placeholder="Valor da peça2"
          value={valor2}
          onChangeText={setValor2}
          keyboardType="number-pad"
        />
      </View>
      <Text style={styles.text}>{`VALOR A PAGAR: R$ ${total}`}</Text>
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

  divider: {
    marginHorizontal: 5,
  },

  textInput: {
    borderWidth: 1,
    flex: 1,
    fontSize: 16,
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

export default Basic1010;
